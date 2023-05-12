import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddcart, setRemovecart } from '../reducer/user';

const CarCard = ({ product }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.user);
    const AddToCart = () => {
        dispatch(setAddcart({
            carId: product._id
        }))
    };

    const RemoveToCart = () => {
        dispatch(setRemovecart({
            carId: product._id
        }))
    };

    return (
        <div className="group relative">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                    <p className="text-2xl uppercase text-gray-900 font-bold">{product.name}</p>
                    <p className="uppercase text-sm text-gray-400">
                        {product.desc.slice(0, 120)}...
                    </p>
                </div>
                <div className="prod-img">
                    <img src={product.imageSrc}
                        className="w-full object-cover object-center" alt={product.imageAlt} />
                </div>
                <div className="prod-info grid gap-10">
                    <div>
                        <ul className="flex flex-row justify-center items-center">
                            <li className="mr-4 last:mr-0">
                                <span
                                    className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                </span>
                            </li>
                            <li className="mr-4 last:mr-0">
                                <span
                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                </span>
                            </li>
                            <li className="mr-4 last:mr-0">
                                <span
                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
                                </span>
                            </li>
                            <li className="mr-4 last:mr-0">
                                <span
                                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-col justify-between items-center text-gray-900">
                        <div>
                            <p className="font-bold text-xl">{product.price}₹/day</p>
                        </div>
                        {!cart.includes(product._id) ? <button
                            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-sm hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={AddToCart}>Add
                            to cart</button> :
                            <button
                                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-sm hover:bg-red-600 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={RemoveToCart}>
                                Remove
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard
