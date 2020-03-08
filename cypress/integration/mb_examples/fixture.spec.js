describe('Login with fixtures data', () => {
	it('should ry to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#user_login').as(username)
			cy.get('#user_password').as(password)

			cy.contains('Sign in').click()
		})
	})
})
