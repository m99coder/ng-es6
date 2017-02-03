const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['../test/**/*.js'],
	onPrepare: () => {
		jasmine.getEnv().addReporter(new SpecReporter({
			displayStacktrace: 'all',
			displayFailuresSummary: false
		}));
	}
};
