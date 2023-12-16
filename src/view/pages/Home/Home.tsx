import {Component} from "react";

import spinach from '../../../images/products/spinach.png';

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

                    <div className="flex w-28 h-32
                                    mr-2 mb-2 justify-center
                                    items-center
                                    border-gray-500 border-[0.5px]">
                        02
                    </div>

                    <div className="flex w-28 h-32
                                    mr-2 mb-2 justify-center
                                    items-center
                                    border-gray-500 border-[0.5px]">
                        03
                    </div>

                    <div className="flex w-28 h-32
                                    mr-2 mb-2 justify-center
                                    items-center
                                    border-gray-500 border-[0.5px]">
                        04
                    </div>

                    <div className="flex w-28 h-32
                                    mr-2 mb-2 justify-center
                                    items-center
                                    border-gray-500 border-[0.5px]">
                        05
                    </div>
                </div>
            </div>
        );
    }
}