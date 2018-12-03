# React Webpack Starter
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 
[![GitHub version](https://badge.fury.io/gh/temilaj%2Freact-webpack-starter.svg)](https://badge.fury.io/gh/temilaj%2Freact-webpack-starter)

A boiler plate for creating react applications bundled by webpack (using ES6+, Babel, SASS and webpack development server)

## Features
+ ES6 and greater => ES5 code transpiling (with Babel)
+ Styling with SASS
+ File bundling with webpack
+ local development with the webpack development server

## Requirements
To run this project, you’ll need to install [node 5 and above](https://nodejs.org/en/). The latest version of Node.js is recommended. 

The dependencies of this project are managed with yarn (see installation guide [here](https://yarnpkg.com/en/)). However you can simply use the node package manager, npm for your dependency management.

## Setting up
+ Clone this project to any folder on your local machine
```bash
git clone https://github.com/temilaj/react-webpack-starter.git <FOLDER_NAME_HERE>
```
+ Navigate into the folder name specified
```bash
cd <FOLDER_NAME_HERE>
```

## Installing Packages
+ For those who love yarn
```bash 
yarn install
```

+ For those who love NPM
```bash 
npm install
```

## Runnning the bundle

```bash
 yarn build
```

or 

```bash
 npm run build
```
## Running the app in Development

Run `npm start` to intialize and run the webpack development server. Navigate to [http://localhost:3000/](http://localhost:3000). The app will automatically reload if you change any of the source files.

## Running the app in Production

To run the app in production build of the app, use either of the following.

```bash
 yarn start
```
or
```bash
 npm start
```

## LICENSE

#### [MIT](./LICENSE) © [Temi Lajumoke](http://temilajumoke.com)