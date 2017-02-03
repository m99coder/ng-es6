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
* Unit tests using `Karma` and `Jasmine`

**Build targets**:

* `npm start` – Serve Application with Hot Module Replacement using `BrowserSync`
* `npm run build` – Build production-ready version of application into `dist`
* `npm run clean` – Remove production build folder
* `npm test` – Run unit tests using `Karma`
