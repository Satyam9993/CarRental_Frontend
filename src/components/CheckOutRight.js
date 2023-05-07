import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRemovecart } from '../reducer/user';

const CheckOutRight = () => {
    const { cart, cars } = useSelector(state => state.user);
    const products = cars.filter(c => cart.includes(c._id));
    const dispatch = useDispatch();

    const RemoveToCart = (id) => {
        dispatch(setRemovecart({
            carId : id
        }))
    };

    const calTotal = () => {
        let t = 0;
        for (let i = 0; i < products.length; i++) {
            t += Number(products[i].price);
        }
        return t;
    }
    return (
        <>
            <div className="px-3 md:w-7/12 lg:pr-10">
                <h3 className='font-bold text-lg p-4'>Cart Items</h3>
                <div className="h-[400px] w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6 overflow-y-scroll">
                    {products.map((p) => (
                        <div className="w-full flex items-center p-4" key={p._id}>
                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
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
                                <button className='w-6 h-6 hover:text-red-500 font-semibold' onClick={()=>RemoveToCart(p._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="-mx-2 flex items-end justify-end">
                        <div className="flex-grow px-2 lg:max-w-xs">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                            <div>
                                <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                            </div>
                        </div>
                        <div className="px-2">
                            <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                        </div>
                    </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                    <div className="w-full flex mb-3 items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Subtotal</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold">{calTotal()}₹/day</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Taxes (GST)</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold">{calTotal() * 0.08}₹/day</span>
                        </div>
                    </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                    <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Total</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold text-gray-400 text-sm">IND</span> <span className="font-semibold">₹{calTotal() * 0.08 + calTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutRight