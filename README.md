# React Webpack Starter
A boiler plate for creating react applications bundled by webpack

## Requirements
To run this project, you’ll need to install [node 5 and above](https://nodejs.org/en/) the latest version of Node.js is recommended. You'll also need a global installation of [webpack](https://webpack.js.org/ )and the [webpack development server](https://webpack.js.org/configuration/dev-server/). 

```
npm i -g webpack webpack-dev-server
```

The dependencies of this project are managed with yarn (see installation guide [here](https://yarnpkg.com/en/)). However you can simply use the node package manager, npm for your dependency management.

## Installing Packages
+ For those who love yarn
```
bash yarn install
```

+ For those who love NPM
```
bash npm install
```

## Runnning the bundle

```bash
 yarn run build
```

or 

```bash
 npm run build
```
## Running the app in Development

Run `npm start` to intialize and run the webpack development server. Navigate to [http://localhost:3000/](http://localhost:3001). The app will automatically reload if you change any of the source files.

## Running the app in Production

If you want to run the app in production, set the `NODE_ENV` environment variable to `production`.

```bash
 NODE_ENV=production yarn start
```
or
```bash
 NODE_ENV=production npm start
```

## LICENSE

#### [MIT](./LICENSE) © [Temi Lajumoke](http://temilajumoke.com)