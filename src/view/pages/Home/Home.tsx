import {Component} from "react";

import spinach from '../../../images/products/spinach.png';
import tomato from '../../../images/products/tomato.png';
import beans from '../../../images/products/beans.png';
import {Product} from "../../common/Product/Product";

export class Home extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async ()=> {
        try {
            const response = await
                fetch('./product-data.json');
            const jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.log('Error fetching data: ',
                error)
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="flex">
                <div className="mt-5 mb-5 flex flex-wrap
                                justify-center
                                items-center
                                mx-auto">
                    {
                          data.map((product: any) => (
                            <Product key={product.id} data={product}/>
                          ))
                    }

                </div>
            </div>
        );
    }
}