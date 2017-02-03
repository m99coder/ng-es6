import HomeModule from './home';

describe('Home', () => {
	let $rootScope, $state, $location, $componentController, $compile;

	beforeEach(window.module(HomeModule));

	it('should run', () => {
		expect(true).toBeTruthy();
	});

});
