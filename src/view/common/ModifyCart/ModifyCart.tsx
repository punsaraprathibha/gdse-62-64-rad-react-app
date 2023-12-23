import {Component} from "react";

interface ModifyCartProps {data: any}
interface ModifyCartState {itemCount: number}
export class ModifyCart
    extends Component<ModifyCartProps,
                      ModifyCartState> {

    public static itemsList = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }
    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount = ()=> {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount})
            } else {
                alert("Item count can't be less than 1");
            }
        }
        const onIncreaseItemCount = () => {
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div className="w-full mt-1 p-[2.4px]
                                            bg-secondary text-[8px]
                                            text-center">
                <button className="float-left text-[8px]
                                        bg-yellow-300 rounded-lg h-3 w-4"
                                  onClick={onDecreaseItemCount}>-</button>
                <small className="text-[8px]">{itemCount}</small>
                <button className="float-right text-[8px]
                                        bg-yellow-300 rounded-lg h-3 w-4"
                                  onClick={onIncreaseItemCount}>+</button>
            </div>
        );
    }
}