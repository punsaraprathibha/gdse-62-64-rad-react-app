import {Component} from "react";
import logo from '../../images/icon.png'

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex
                            justify-center">

                <p className="text[10px] text-[#e6f0e6]
                              pr-2 hover:text-green-400">
                    Copyright @ 2023</p>
                <h1 className="text-1xl text-secondary">
                    Organic Shop</h1>
                <img className="h-5 w-5 top-0 ml-1"
                     src={logo} alt=""/>
            </div>
        );
    }
}