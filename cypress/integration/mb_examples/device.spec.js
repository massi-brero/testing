/// <reference types="Cypress" />

describe('Device Tests', () => {
	it('iphone XR', () => {
		cy.viewport('iphone-xr')
		cy.visit('http://books.toscrape.com/')
		cy.wait(3000)
	})

	it('1280', () => {
		cy.viewport(1280, 720)
		cy.visit('http://books.toscrape.com/')
		cy.wait(3000)
	})

	it('ipad', () => {
		cy.viewport('ipad-mini')
		cy.visit('http://books.toscrape.com/')
		cy.wait(3000)
	})

	it('Macbook 15', () => {
		cy.viewport('macbook-15')
		cy.visit('http://books.toscrape.com/')
	})
})
