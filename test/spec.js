describe('Protractor Demo', () => {

	it('should have a title', () => {
		browser.get('http://localhost:3000/');
		expect(browser.getTitle()).toEqual('ng-es6');
	});

});
