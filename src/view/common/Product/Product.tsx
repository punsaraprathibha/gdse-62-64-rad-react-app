import {Component} from "react";
import spinach from "../../../images/products/spinach.png";

interface ProductProps {
    data: any
}

export class Product extends Component<ProductProps> {
    render() {

        const {data} = this.props;

        return (
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
                            {data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px]
                                           rounded-lg pr-2">
                        <h3 className="text-[12px] pl-2">{data.price}
                            <small className="text-[7px]">{data.currency}</small>
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
        );
    }
}