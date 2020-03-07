/// <reference types="Cypress" />

describe('working wirth inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 21).getTime()
		cy.clock(date)
		cy.log(date)
	})

	it('Visit bank page ', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.url().should('contain', 'webappsecurity')
		cy.clearCookies({ log: true }).clearLocalStorage({ log: true })

		cy.title().should('equal', 'Zero - Log in')
	})

	it('should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username')
			.clear()
			.type('some_name', { delay: 50 })
	})

	it('should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password')
			.clear()
			.type('some_password', { delay: 50 })
	})

	it('should mark checkbox', () => {
		cy.get('input[type=checkbox]').click()
	})

	it('submit form', () => {
		cy.contains('Sign in').click()
	})

	it('should display error message', () => {
		cy.contains('Sign in').click()
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
