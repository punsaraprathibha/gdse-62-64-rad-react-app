1. Previously we had below components in `App.tsx` wrapped by `BrowserRouter`
    `<BrowserRouter>
       <Navbar/>
       <MainContent/>
       <Footer/>
   </BrowserRouter>`
2. So, if we need to navigate to login page which don't have any of these common components, we need to do some small layout change of this current layout.
3. So, for that we need to extract these common set of components to a separate single component for easy to manage. Let's call it as `DefaultLayout.tsx`
    `export class DefaultLayout extends Component { 
        render() {
            return (
                <>
                    <Navbar/>
                    <MainContent/>
                    <Footer/>
                </>
            );
        }
   }`
4. Let's create new component called `Login`
    `export class Login extends Component {
        render() {
            return (
                <>
                    <h1 className="text-4xl text-center text-tertiary">This is Login!</h1>
                </>
           );
       }
   }`
5. Then import and define this newly created `DefaultLayout` component and `Login` component inside `App.tsx`.
    `<BrowserRouter>
        <Routes>
            <Route path="/*" Component={DefaultLayout}></Route>
            <Route path="/login" Component={Login}></Route>
        </Routes>
    </BrowserRouter
    `
6. Then define a Link inside the Sign-In button like below to enable navigation to login page
   `<Link to="/login">Sign In</Link>`
7. Paste this code inside `About.tsx`
   `<div className="flex">
       <div className="h-auto pt-5 pb-5 pl-10 pr-10 mx-auto">
           <h2 className="pb-3 text-3xl text-green-400 underline decoration-2">About Us</h2>
           <p className="pb-3 text-[9px]">At Organic Shop, we believe in the power of nature to nourish, heal, and inspire. Our journey began with a simple yet profound realization: the importance of embracing organic living for the well-being of both individuals and the planet.
           <br/>
           <br/>
           Mission:
           Our mission is to make organic living accessible to all, fostering a harmonious relationship between people and the environment. We are committed to offering a diverse range of high-quality, ethically sourced, and sustainable products that promote health, wellness, and a greener lifestyle.</p>
       </div>
   </div>`
8. Then place this code inside `Content.tsx`
   `<div className="flex">
       <div className="h-auto pt-5 pb-5 pl-10 pr-10 mx-auto">
           <div className="p-2">
               <h2 className="text-3xl text-green-400 text-center underline decoration-2">Contact Us</h2>
               <p className="pb-3 text-[8px]">Got a technical issue? Want to contact us? Please let us assist you..</p>
           </div>
               <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">Your Email: </label>
                            <input className="float-right border-[1px] border-green-200 " type="email"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Subject: </label>
                            <input className="float-right border-[1px] border-green-200" type="text"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Message: </label>
                            <textarea className="float-right border-[1px] border-green-200"></textarea>
                        </div>
                        <div className="mt-2">
                            <button type="button" className="mt-5 p-[5px] bg-green-400 text-[7px]">Send Message</button>
                        </div>
               </form>
           </div>
      </div>`
9. Replace the `Login.tsx` with this below code.
   `<div className="flex h-screen bg-[#444544]">
       <div className="h-auto mt-4 mb-4 pl-9 pr-9 mx-auto border-gray-500 border-[0.5px]">
       <h2 className="pt-2 pb-3 text-3xl text-green-400 underline decoration-2">Sign In</h2>
           <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">Email: </label>
                            <input className="float-right border-[1px] border-green-200 w-3/4" type="email"></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Password: </label>
                            <input className="float-right border-[1px] border-green-200 w-3/4" type="text"></input>
                        </div>
                        <div className="mt-2">
                            <button type="button" className="mt-5 w-full p-[6px] bg-green-400 text-[7px]">Sign In</button>
                        </div>
           </form>
       </div>
   </div>`
10. Add the below code to `Home.tsx`.
    `<div className="flex">
        <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
            {/* First Row */}
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
             01
            </div>
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
             02
            </div>
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
             03
            </div>

            {/* Second Row */}
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
              04
            </div>
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
              05
            </div>
            <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
              06
            </div>
        </div>
    </div>`
11. Then create grid product items like below.
    `<div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
        <div>
            <img className="h-[88px] w-[88px]" src={spinach} alt=""/>
        </div>
        <div className="flex">
            <div>
                <h3 className="text-secondary text-[12px] pl-2">Spinach</h3>
            </div>
            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
        </div>
    </div>`
    `<div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
          <div>
               <img className="h-[88px] w-[88px]" src={tomato} alt=""/>
          </div>
          <div className="flex">
              <div>
                   <h3 className="text-secondary text-[12px] pl-2">Tomato</h3>
              </div>
              <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                   <h3 className="text-[12px] pl-2">300 <small className="text-[7px]">LKR</small></h3>
              </div>
          </div>
          <div className="flex justify-center">
              {/*<p className="text-[10px]">Available Items: 12</p>*/}
              <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
          </div>
    </div>`
    `<div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
          <div>
               <img className="h-[88px] w-[88px]" src={beans} alt=""/>
          </div>
          <div className="flex">
               <div>
                    <h3 className="text-secondary text-[12px] pl-2">Beans</h3>
               </div>
               <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-2">250 <small className="text-[7px]">LKR</small></h3>
               </div>
          </div>
          <div className="flex justify-center">
               /*<p className="text-[10px]">Available Items: 12</p>*/}
               <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
          </div>
     </div>`
12. Now let's see how to load these items dynamically through a json file by extracting this as a new component called "Product".
13. So, create a json file called `product-data.json` inside `public` folder and paste the below code inside it.
    `[
        {"id":  1,
         "name": "Spinach",
         "price": "200",
         "currency": "LKR",
         "image": "spinach.png"
        },
        {"id":  2,
         "name": "Tomato",
         "price": "300",
         "currency": "LKR",
         "image": "tomato.png"
        },
        {"id":  3,
         "name": "Beans",
         "price": "250",
         "currency": "LKR",
         "image": "beans.png"
        }
    ]`
14. Extract the product section and create a new common component called `Product`.
    `import {Component} from "react";

    interface ProductProps {
        data: null
    }

    export class Product extends Component<ProductProps> {
        render() {
            // @ts-ignore
            const {data} = this.props;
            const image = require('../../../images/products/' + data.image);

            return (
                <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                    <div>
                        <img className="h-[88px] w-[88px]" src={image} alt=""/>
                    </div>
                    <div className="flex">
                        <div>
                            <h3 className="text-secondary text-[12px] pl-2">Spinach</h3>
                        </div>
                        <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                            <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                       <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                    </div>
                </div>
           );
       }
   }`
15. Then replace the `Home` component with this code
    `export class Home extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('./product-data.json');
            const jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
    // @ts-ignore
    const {data} = this.state;

        return (
            <div>
                <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                    {data.map((product:any) => (
                       <Product key={product.id} data={product}/>
                    ))}
                </div>
            </div>
        );
    }
    }`
16. Then you can see adding more data to .json file to reflect in the dashboard at realtime.