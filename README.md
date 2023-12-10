1. Create a folder called `view` inside that place `Navbar`, `MainContent` and `Footer` folders.
2. Create a folder called `images` to add images and add `icon.png`.
3. Then place this code inside Navbar.
   `return (
       <div className="p-2 bg-[#444544] flex">
           <h1 className="text-1xl text-secondary">Organic Shop</h1>
           <img className="h-5 w-5 top-0 ml-1" src={logo} alt=""/>
       </div>
   );`
4. Then place this code inside MainContent
   `return (
       <div className="md:px12 max-2x1 mx-auto pt-28 pb-28">
           <h1 className="text-tertiary text-center">This is Main Content</h1>
       </div>
   );`
5. Then place this code inside Footer
   `return (
       <div className="p-2 bg-[#444544]">
           <h1 className="text-1xl text-secondary text-center">This is Footer</h1>
       </div>
   );`
6. Put this code in `App.tsx`
   `<>
       <Navbar/>
       <MainContent/>
       <Footer/>
   </>`
7. Then replace this code in `Navbar`.
   `<div className="p-2 bg-[#444544] flex">
        <h1 className="text-1xl text-secondary">Organic Shop</h1>
        <img className="h-5 w-5 top-0 ml-1" src={logo} alt=""/>

        <ul className="list-none ml-[165px]">
            <li className="inline-block mr-2 text-[11px] text-[#e6f0e6] cursor-pointer hover:text-green-400">Home</li>
            <li className="inline-block mr-2 text-[11px] text-[#e6f0e6] cursor-pointer hover:text-green-400">Contact</li>
            <li className="inline-block mr-2 text-[11px] text-[#e6f0e6] cursor-pointer hover:text-green-400">About</li>
        </ul>
        <button className="text-[8px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 ml-5 rounded hover:text-tertiary">Sign In</button>
   </div>`
8. Then replace footer with this code to add additional styles.
   `<div className="p-2 bg-[#444544] flex justify-center">
       <p className="pt-1 pr-3 text-[10px] text-[#e6f0e6] hover:text-green-400">Copyright © 2023</p>
       <h1 className="text-1xl text-secondary">Organic Shop</h1>
       <img className="h-5 w-5 top-0 ml-1" src={logo} alt=""/>
   </div>`
9. Install react-router-dom by using this command: `npm i -D react-router-dom`
10. Then please create a Home component
    `return (
        <>
            <h1 className="text-center">This is Home Component!</h1>
        </>
    );`
11. Then place this code inside `MainContent.tsx` to add routing for Home
    `<Routes>
        <Route path="/" Component={Home}></Route>
    </Routes>`
12. Then Place this code inside Navbar to navigate to home
    `<Link to="/">Home</Link>`
13. Then place this code inside `MainContent.tsx` to add routing for Contact & About
    `<Route path="/contact" Component={Contact}></Route>
     <Route path="/about" Component={About}></Route>`
14. Then please create these links in Navbar to navigate both about and contact
    `<Link to="/contact">Contact</Link>
     <Link to="/about">About</Link>`
15. Then remove temporary added `pt-28 pb-28` classes to `MainContent.tsx` and comment out `<h1 className="text-center">This is Main Content</h1>` tag in `MainContent.tsx` for more visual representation
16. Then please set custom heights bg-color for those components for further visual representation
    Home.tsx -> `h-60 pt-6 bg-yellow-400`
    About.tsx -> `h-32 pt-6 bg-blue-200`
    Contact.tsx -> `h-44 pt-6 bg-green-300`
17. Then explain the usage of min-height property to keep same height for components
    Contact.tsx -> `min-h-screen`
18. You may use onClick method to capture any button click events.
    `<button className="text-[8px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 ml-5 rounded hover:text-tertiary"
             onClick={this.onButtonClick}>Sign In</button>`
    `private onButtonClick = () => {
        alert("Button Clicked!")
    }`