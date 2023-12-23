1. Now we have to create two different `Modules` for having both `client` and `server` side code.
2. So, firstly let's create `client` module first by `File->New->Module` and select `React`.
3. Then place all the existing files inside `client` module and move inside the client module by `cd client` and then run `npm install` command.
4. Now the client side should work as usual when you run `npm run start` inside `client` module.
5. Then let's create backend module called `server` by `File->New->Module` and select `Express`.
6. Then it will create an `Express` app inside `server` module.
7. Then change the default port from `3000` to `4000` inside `server.bin.www.js`.
8. Then check default url routes defined inside Express server such as `http://localhost:4000` & `http://localhost:4000/users`