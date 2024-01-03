import {Component} from "react";

import {Product} from "../../common/Product/Product";
import axios from "axios";
export class Home extends Component {

    private api: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData()
            .then(r => console.log("Data fetch completed!" + r)); // Callback Function
    }
    fetchData = async ()=> {
        try {
            this.api.get('/products/all')
            .then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({data: jsonData});
            }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
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