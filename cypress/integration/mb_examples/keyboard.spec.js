describe('Keyboard press simulation', () => {
	it('should submit searchbox with pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com')
		cy.get('#searchTerm').type('some text {enter}')
	})
})
