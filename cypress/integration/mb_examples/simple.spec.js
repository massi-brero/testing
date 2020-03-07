/// <reference types="Cypress" />

describe('easy cy test', () => {
	it('Visits site', () => {
		cy.visit('http://books.toscrape.com/')
		cy.url().should('include', 'toscrape')
		cy.log('before reload')
		cy.reload()
		cy.log('after reload')
	})

	it('should find correct element on page', () => {
		cy.get('h1').should('be.visible')
	})

	it('should contain correct number of elements', () => {
		cy.get('.product_pod')
			.its('length')
			.should('eq', 20)
	})
})
