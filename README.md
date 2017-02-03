# ng-es6
Angular 1.x using ES6, Gulp and Webpack as well as Component Generator

**Features** so far:

* `Babel` as transpiler for ES6 to ES5
* `Webpack` as bundler
	* Hot Module Replacement
	* Development and production profile
* Loaders for
	* JavaScript files using `ng-annotate` and `Babel`
	* HTML files served as raw
	* SASS files transpiled to CSS
	* CSS files served as style files
* `Gulp` as orchestrator with defined targets
* Unit tests using `Karma`, `Jasmine`, `PhantomJS` and `Istanbul`
* E2E tests using `Protractor` and `Jasmine`
* `Dockerfile` to deploy production build

**Build targets**:

* `npm start` – Serve Application with Hot Module Replacement using `BrowserSync`
* `npm run build` – Build production-ready version of application into `dist`
* `npm run clean` – Remove production build folder
* `npm run docker:build` – Build `Docker` image based on `Dockerfile`
* `npm run docker:run` – Run `Docker` container exposing port `3000`
* `npm run test:unit` – Run unit tests using `Karma` (an alias is `npm test`)
* `npm run test:e2e` – Run E2E tests using `Protractor` (app must run in parallel)
* `npm run wd:update` – Update Webdriver
* `npm run wd:start` – Start Webdriver (necessary for `npm run test:e2e`)

It’s heavily based on [NG6-starter](https://github.com/AngularClass/NG6-starter) with slightly changes in
directory structure and enhanced by E2E test support as well as a basic Dockerfile.
