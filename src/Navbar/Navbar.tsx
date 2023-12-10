import {Component} from "react";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-4 bg-blue-300
                            bg-gradient-to-br
                            from-green-300
                            via-blue-700
                            to-yellow-300">
                <h1 className="text-4xl text-center text-tertiary">
                    This is Navbar!</h1>
            </div>
        );
    }
}