import {Component} from "react";

export class MainContent extends Component {
    render() {
        return (
            <div className="pt-28 pb-28 bg-amber-100">
                <h1 className="text-4xl text-center text-tertiary">
                    This is Main Content!</h1>

                <div className="h-20 w-20 text-center p-1 bg-yellow-400
                                rotate-12 shadow-gray-900 shadow-xl
                                hover:shadow-red-500
                                cursor-pointer">
                    Height <br/>& <br/> Width
                </div>
            </div>
        );
    }
}