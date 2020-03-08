/// <reference types="Cypress" />

describe('Custom commands', () => {
	it('should login into app using custom cy commands', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('username', 'password')
	})
})
