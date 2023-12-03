1. `File`->`New`->`Project`->`Javascript`->`React` (Command: `npx create-react-app my-app --template typescript`)
2. Go to `package.json` to see defined default run scripts for the React project
3. Run `npm run start` to run the React project you've created to see the output in browser on port 3000
4. Add `tailwind css, Tailwind Formatter, Tailwind CSS Smart Completions` plugins in IntelliJ IDEA
5. Clear `App.tsx`, `App.css` and `index.css` files to remove boilerplate code provided initially
6. Goto `https://tailwindcss.com/docs/installation` to see instructions for tailwind css.
7. Then click `Using PostCSS` tab which redirects to `https://tailwindcss.com/docs/installation/using-postcss` for instructions for React Project.
8. Install Tailwind css
   1. `npm install -D tailwindcss postcss autoprefixer` 
   2. `npx tailwindcss init`
9. Add postcss.config.js
      `module.exports = {
          plugins: {
              tailwindcss: {},
              autoprefixer: {},
          }
      }`
10. Add tailwind.config.js
      `/** @type {import('tailwindcss').Config} */
           module.exports = {
               content: ["./src/**/*.{js,jsx,ts,tsx}"],
               theme: {
                   extend: {},
               },
               plugins: [],
          }`
11. Add this to index.css
       `@tailwind base;
        @tailwind components;
        @tailwind utilities;`
12. Then run the project usually using script command defined in `package.json`.
    Command: `npm run start`
13. Add `<div>Box</div>` to App.tsx
14. Then define inline css for this Box div `<div style={{backgroundColor: "red", padding: 10, textAlign: "center"}}>Inline CSS Box</div>`
15. Then explain the difference between the below code
    App.tsx to
    `<br/>
    <div className="box">External CSS Box</div>`

    App.css to
    `.box {
    background-color: red;
    padding: 10px;
    text-align: center;
    }`
16. Then explain the difference using utility classes
    App.tsx to `<br/>
    <div className="bg-red p-10 text-center">Utility CSS Box</div>`

    App.css to
    `.bg-red {
    background-color: red;
    }

    .p-10 {
    padding: 10px;
    }

    .text-center {
    text-align: center;
    }`