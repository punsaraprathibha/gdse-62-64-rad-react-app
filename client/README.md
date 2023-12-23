1. Then let's define a function called `addToCartOnClick` to manage addToCart
    `private addToCartOnClick = ()=> {

    }`
2. Then call the method
   `<button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]"
             onClick={this.addToCartOnClick}>Add to Cart
    </button>}`
3. Then define `ProductState` interface for state management
    `interface ProductProps {
        data: any;
    }

    interface ProductState {
        isActive: boolean
    }

    export class Product extends Component<ProductProps, ProductState> {

        constructor(props: ProductProps) {
            super(props);
            this.state = {
                isActive: false,
            };
       }
   }`
4. Then modify the function like below.
    `private addToCartOnClick = ()=> {
        this.setState({ isActive: !this.state.isActive }, () => {
            console.log(this.state.isActive);
            alert(this.state.isActive);
        });
    }`
5. Then you can do anything based on the above status update on button click like below.
    `{this.state.isActive 
        ? <div className="w-full mt-1 p-[2.4px] bg-red-500 text-[8px] text-center">Remove from Cart</div>
        : <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]"
                  onClick={this.addToCartOnClick}>Add to Cart
          </button>}`
6. Then change this Remove cart section to the below code.
    `<div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center">
        <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4">-</button>
        <small className="text-[8px]">1</small>
        <button className="float-right text-[8px]  bg-yellow-300 rounded-lg h-3 w-4">+</button>
    </div>`
7. Then create a separate common component called `AddToCart` and then place this code inside it.
8. Now let's do the state management process to handle item count with additions and deductions.
    `interface AddToCartProps {
        data: {product: any, isAdded: boolean};
    }

    interface AddToCartState {
        itemCount: number;
    }

    export class AddToCart extends Component<AddToCartProps, AddToCartState> {

    constructor(props: AddToCartProps) {
        super(props);
        this.state = {
           itemCount: 1,
        };
    }

    render() {

        // @ts-ignore
        let { itemCount } = this.state;

        let increaseItemCount = () => {
            alert("Add")
            this.setState({itemCount: ++itemCount});
        }

        let decreaseItemCount = () => {
            alert("Remove")
            this.setState({itemCount: --itemCount});
        }

        return (
            <div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center">
                <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4 border-gray-500"
                        onClick={decreaseItemCount}>-</button>
                <small className="text-[8px]">{itemCount}</small>
                <button className="float-right text-[8px]  bg-yellow-300 rounded-lg h-3 w-4"
                        onClick={increaseItemCount}>+</button>
            </div>
        );
    }
    }`
9. Then add this inside `Product.tsx`
    `<AddToCart data={{product: data, isAdded: this.state.isActive}}/>`
10. Then add this additional logic to handle itemCount not to be decreased below 1.
    `let decreaseItemCount = () => {
        if(itemCount > 1) {
            this.setState({itemCount: --itemCount});
        } else {
            alert("Item count can't be less than 1")
        }
    }`
11. Then I need to keep these added product data inside an array for future usage.
12. For that let's create a static array inside the component to keep these data.
    `export class AddToCart extends Component<AddToCartProps> {
        public static itemsList: CartItem[] = []; // <- Add this line
    }`
13. Then let's add product data initially to this array when Add to Cart button on click.
    `componentDidMount() {
        // @ts-ignore
        let { itemCount } = this.state;
        if (this.props.data.isAdded) {
            // @ts-ignore
            if (!AddToCart.itemsList.find(item=> item.product.id === this.props.data.product.id)) {
                AddToCart.itemsList.push({product: this.props.data.product, itemCount: itemCount});
                console.log(AddToCart.itemsList);
            }
        }
    }`
14. Then let's manipulate array data based on itemCount changes.
    `componentDidUpdate(prevProps: Readonly<AddToCartProps>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        let { itemCount } = this.state;
        // @ts-ignore
        let find = AddToCart.itemsList.find(item=> item.product.id === this.props.data.product.id);
        // @ts-ignore
        let index = AddToCart.itemsList.indexOf(find);
        AddToCart.itemsList.splice(index, 1);
        AddToCart.itemsList.push({product: this.props.data.product, itemCount: itemCount});
        console.log(AddToCart.itemsList);
    }`
15. Create a new Component called `ShoppingCart` and place this code inside it.
    `interface ShoppingCartProps {
       itemsList: CartItem[];
    }

    export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <h1>This is shopping cart!<h1/>
        )
    }`
16. Then add this link inside `Navbar.tsx`.
    `<li className="ml-auto mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
        <Link to="/shopping-cart">My-Cart</Link>
    </li>`
17. Also add this code inside `MainContent.tsx` to enable routing.
    `<Route path="/shopping-cart" element={<ShoppingCart itemsList={AddToCart.itemsList}/>}></Route>`
18. Now let's loop the itemList passed to the ShoppingCart component and display it in a table.
    `render() {

        return (
            <div className="flex justify-center items-center min-h-screen">
                <table className="w-full mx-6">
                    <tr className="bg-gray-400">
                        <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Id</th>
                        <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Name</th>
                        <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Unit Price</th>
                        <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Quantity</th>
                        <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Total Price</th>
                    </tr>
                    {
                        this.props.itemsList.length === 0 ?
                            <tr>
                                <td colSpan={5} className="border-black border-[0.5px] px-1">
                                    <p className="text-[8px] text-center">No Items to Display!</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> :
                            this.props.itemsList.map((item) => (
                                <tr className="border-black border-[0.5px] px-1">
                                    <td className="text-[9px] border-black border-[0.5px] px-1">{item.product.id}</td>
                                    <td className="text-[9px] border-black border-[0.5px] px-1">{item.product.name}</td>
                                    <td className="text-[9px] border-black border-[0.5px] px-1">{item.product.price + ' ' + item.product.currency}</td>
                                    <td className="text-[9px] border-black border-[0.5px] px-1">{item.itemCount}</td>
                                    <td className="text-[9px] border-black border-[0.5px] px-1">{(item.itemCount * item.product.price) + ' ' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        );
    }`