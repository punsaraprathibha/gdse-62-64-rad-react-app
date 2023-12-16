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
                    <div className="w-28 h-32 bg-blue-300
                                    mr-2 mb-2 justify-center
                                    items-center">
                        <div>
                            <img src={spinach} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary
                                               text-[12px] pl-2">
                                    Spinach</h3>
                            </div>
                            <div>
                                <h3 className="text-[12px]">200 LKR</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-28 h-32 bg-blue-300
                                    mr-2 mb-2 justify-center
                                    items-center">
                        02
                    </div>

                    <div className="flex w-28 h-32 bg-blue-300
                                    mr-2 mb-2 justify-center
                                    items-center">
                        03
                    </div>

                    <div className="flex w-28 h-32 bg-blue-300
                                    mr-2 mb-2 justify-center
                                    items-center">
                        04
                    </div>

                    <div className="flex w-28 h-32 bg-blue-300
                                    mr-2 mb-2 justify-center
                                    items-center">
                        05
                    </div>
                </div>
            </div>
        );
    }
}