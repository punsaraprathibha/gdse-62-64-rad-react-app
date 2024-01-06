1. Run `npm i axios` command on your client module to install axios on the client side 
2. Then now you're good to start working with axios and start communication between the client and the server side
3. First let's integrate the home view with its backend. Please replace this code inside `fetchData` method
    `try {
    // const response = await fetch('./product-data.json');
    // const jsonData = await response.json();
    this.api.get('/products/all').then((res: { data: any; }) => {
        const jsonData = res.data;
        console.log(jsonData);
        this.setState({data: jsonData});
    }).catch((error: any) => {
        console.error('AxiosError:', error);
    });
    } catch (error) {
        console.error('Error fetching data:', error);
    }`
4. Now let's integrate our POST endpoint with the backend.
    `export class ContactRoutes extends Component {

        private api: any;

        constructor(props: any) {
            super(props);
            this.api = axios.create({baseURL: `http://localhost:4000`});
        }

        private onSendBtnClick = () => {
            try {
                this.api.post('/contact', {
                    email: "sample@gmail.com",
                    subject: "Unable to SignIn",
                    message: "I can't login to the system"
                }).then((res: { data: any; }) => {
                    const jsonData = res.data;
                    alert(jsonData);
                }).catch((error: any) => {
                    console.error('AxiosError:', error);
                });
           } catch (error) {
                console.error('Error fetching data:', error);
           }
    }
    }`
5. Now let's set the input values of the form to the request body using react states.
    `interface ContactProps {
       data: any;
    }

    interface ContactState {
       email: string;
       subject: string;
       message: string;
    }

    export class ContactRoutes extends Component<ContactProps, ContactState> {
       constructor(props: any) {
           super(props);
           this.api = axios.create({baseURL: `http://localhost:4000`});

           this.state = {
               email: '',
               subject: '',
               message: ''
           }

           this.handleEmailChange = this.handleEmailChange.bind(this);
           this.handleSubjectChange = this.handleSubjectChange.bind(this);
           this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    render() {
       return (
           <div className="flex">
             <div className="h-auto pt-5 pb-5 pl-10 pr-10 mx-auto">
                <div className="p-2">
                  <h2 className="text-3xl text-green-400 text-center underline decoration-2">ContactRoutes Us</h2>
                  <p className="pb-3 text-[8px]">Got a technical issue? Want to contact us? Please let us assist
                  you..</p>
                   </div>

                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">Your Email: </label>
                            <input className="float-right border-[1px] border-green-200 " type="email" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Subject: </label>
                            <input className="float-right border-[1px] border-green-200" type="text" name="subject" value={this.state.subject} onChange={this.handleSubjectChange}></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Message: </label>
                            <textarea className="float-right border-[1px] border-green-200" name="message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                        </div>
                        <div className="mt-2" id="btnDiv">
                            <button type="button" className="mt-5 p-[5px] bg-green-400 text-[7px]"
                                    onClick={this.onSendBtnClick}>Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );

    handleEmailChange(event: { target: { value: string; }; }) {
        this.setState({email: event.target.value});
    }

    handleSubjectChange(event: { target: { value: string; }; }) {
        this.setState({subject: event.target.value});
    }

    handleMessageChange(event: { target: { value: string; }; }) {
        this.setState({message: event.target.value});
    }

    }`
6. Now let's simplify this process to a handle the logic through a single method.
    `constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
           email: '',
           subject: '',
           message: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
          <div className="flex">
            <div className="h-auto pt-5 pb-5 pl-10 pr-10 mx-auto">
             <div className="p-2">
               <h2 className="text-3xl text-green-400 text-center underline decoration-2">ContactRoutes Us</h2>
                  <p className="pb-3 text-[8px]">Got a technical issue? Want to contact us? Please let us assist
                   you..</p>
                  </div>

                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">Your Email: </label>
                            <input className="float-right border-[1px] border-green-200 " type="email" name="email" value={this.state.email} onChange={this.handleMessageInputOnChange}></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Subject: </label>
                            <input className="float-right border-[1px] border-green-200" type="text" name="subject" value={this.state.subject} onChange={this.handleMessageInputOnChange}></input>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">Your Message: </label>
                            <textarea className="float-right border-[1px] border-green-200" name="message" value={this.state.message} onChange={this.handleMessageInputOnChange}></textarea>
                        </div>
                        <div className="mt-2" id="btnDiv">
                            <button type="button" className="mt-5 p-[5px] bg-green-400 text-[7px]"
                                    onClick={this.onSendBtnClick}>Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; }; }) {
         const target = event.target;
         const name = target.name;
         const value = target.value;
        // @ts-ignore
        this.setState({
           [name]: value
        });
    }`