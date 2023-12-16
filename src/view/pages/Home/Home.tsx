import {Component} from "react";

import spinach from '../../../images/products/spinach.png';
import tomato from '../../../images/products/tomato.png';
import beans from '../../../images/products/beans.png';

export class Home extends Component {
    render() {
        return (
            <div className="flex">
                <div className="mt-5 mb-5 flex flex-wrap
                                justify-center
                                items-center
                                mx-auto">
                    <div className="w-28 h-32
                                    mr-2 mb-2 justify-center
                                    items-center
                                    border-gray-500 border-[0.5px]">
                        <div>
                            <img src={spinach} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary
                                               text-[12px] pl-2">
                                    Spinach</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px]
                                           rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200
                                    <small className="text-[7px]">LKR</small>
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="w-full p-[2.5px]
                                              bg-secondary
                                              text-[8px]">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={tomato} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Tomato</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">300 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>

                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={beans} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Beans</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">250 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}