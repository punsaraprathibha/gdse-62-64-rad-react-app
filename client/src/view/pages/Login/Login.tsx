import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen
                             bg-[#444544]">
                <div className="h-auto mt-4
                                mb-4 pl-9
                                mx-auto
                                border-gray-500
                                border-[0.5px]
                                bg-white">
                    <h2 className="pt-2 pb-2
                                  text-3xl
                                  underline decoration-2">Sign In</h2>
                    <form className="h-auto p-2
                                     justify-center">
                        <div className="p-2">
                            <label className="text-[7px]">
                                Email:</label>
                            <input className="float-right
                                               border-[1px]
                                               border-green-200"
                                  type="email"/>
                        </div>

                        <div className="p-2">
                            <label className="text-[7px]">
                                Password:</label>
                            <input className="float-right
                                               border-[1px]
                                               border-green-200"
                                   type="password"/>
                        </div>
                        <div className="mt-2">
                            <button className="mt-3 w-full bg-green-400 text-[7px] p-[6px]">
                                Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}