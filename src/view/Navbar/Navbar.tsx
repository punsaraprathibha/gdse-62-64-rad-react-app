import {Component} from "react";
import logo from '../../images/icon.png'

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex">
                <h1 className="text-1xl text-secondary">
                    Organic Shop</h1>
                <img className="h-5 w-5 ml-1 pt-1" src={logo}
                     alt=""/>
            </div>
        );
    }
}