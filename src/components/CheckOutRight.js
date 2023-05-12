import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRemovecart } from '../reducer/user';
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const CheckOutRight = () => {
    const { cart, cars, token, selectedLocation } = useSelector(state => state.user);
    const products = cars.filter(c => cart.includes(c._id));
    const navigate = useNavigate();
    const [dateDiff, setDateDiff] = useState(1);
    const today = new Date().toISOString().split('T')[0];
    const [duration, setDuration] = useState({
        from: new Date(),
        to: new Date()
    })

    const handleDateChange = (event) => {
        setDuration({
            from: new Date(),
            to: new Date(event.target.value)
        });
        const selected = new Date(event.target.value);
        const today = new Date();
        const diffInMs = selected.getTime() - today.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        setDateDiff(diffInDays + 1);
    };

    const dispatch = useDispatch();

    const RemoveToCart = (id) => {
        dispatch(setRemovecart({
            carId: id
        }))
    };

    const calTotal = () => {
        let t = 0;
        for (let i = 0; i < products.length; i++) {
            t += Number(products[i].price);
        }
        return t;
    }

    const checkout = async () => {
        if (!token) {
            navigate("/login")
        }
        const body = {
            cart: cart,
            durationdate: duration,
            duration: dateDiff,
            location : selectedLocation,
            amount: calTotal() * 0.08 + calTotal()
        };
        const cars = await fetch(`${BACKEND_URL}/api/pay/create-checkout-session`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json", "auth-token": `Bearer ${token}` },
                body: JSON.stringify(body)
            }
        );
        console.log(cars);
        const sessionurl = await cars.json();
        console.log(sessionurl);
        if(sessionurl.url){
            window.location = sessionurl.url;
        }
    };

    return (
        <>
            <div className="px-3 md:w-7/12 lg:pr-10">
                <h3 className='font-bold text-lg p-4'>Cart Items</h3>
                <div className="h-[400px] w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6 overflow-y-scroll">
                    {products.map((p) => (
                        <div className="w-full flex items-center p-4" key={p._id}>
                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200 flex items-center">
                                <img src={p.imageSrc} alt="sdsd" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-semibold uppercase text-gray-600">{p.name}</h6>
                                <p className="text-gray-400">x 1</p>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className="font-semibold text-gray-600 text-xl">{p.price}</span><span className="font-semibold text-gray-600 text-sm">.00₹/day</span>
                                </div>
                                <button className='w-6 h-6 hover:text-red-500 font-semibold' onClick={() => RemoveToCart(p._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-end justify-between">
                        <div className='flex items-center'>
                            <h3 className='text-lg font-semibold'>Duration</h3>
                        </div>
                        <div className="flex-grow px-2 lg:max-w-sm">
                            <div className='flex overflow-hidden'>
                                <div className='mr-4'>
                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">From</label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        type="date"
                                        disabled={true}
                                        value={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">To</label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="XXXXXX"
                                        type="date"
                                        onChange={handleDateChange}
                                        min={today}
                                        value={duration.to.toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                    <div className="w-full flex mb-3 items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Subtotal</span>
                            <p className='text-sm text-blue-500'>This price is according to duration.</p>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold">{dateDiff} x {calTotal()}₹</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Taxes (GST)*dateDiff</span>
                            <p className='text-sm text-blue-500'>This include all kind of taxes.</p>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold">{(calTotal() * dateDiff) * 0.08}₹</span>
                        </div>
                    </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                    <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-800 font-bold">Total</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold text-gray-400 text-sm">IND</span> <span className="font-semibold">₹{calTotal() * 0.08 + calTotal()}</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <button className=' bg-black hover:bg-[#fa5c43] p-4 text-bold text-lg text-white w-1/2 ho' onClick={checkout}>
                        Book Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default CheckOutRight