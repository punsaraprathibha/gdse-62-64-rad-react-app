import {Component} from "react";
import logo from '../../images/icon.png'

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <div className="flex">
                    <h1 className="text-1xl text-secondary">
                        Organic Shop</h1>
                    <img className="h-5 w-5 ml-1 pt-1" src={logo}
                         alt=""/>
                </div>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[11px] text-[#e6f0e6]">Home</li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6]">Contact</li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6]">About</li>
                </ul>

                <button className="text-[8px] text-[#e6f0e6]
                                   bg-green-400 pl-3 pr-3
                                   hover:text-tertiary">
                                    Sign In</button>
            </div>
        );
    }
}