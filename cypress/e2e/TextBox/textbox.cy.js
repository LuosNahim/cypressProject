import {TextBoxPage} from "../../Pages/elementsPage/textboxPage/TextBoxPage";

const textBoxPage = new TextBoxPage()

describe('Text Box Page - Form Functionalities', () => {
    beforeEach(() => {
        cy.fixture('textboxForm-data.json').as('data')
    })
    it('Email is verified whether is valid or no', function() {
        Cypress.on('uncaught:exception', (err) => {
            cy.log('Error Message:',err.message)
            return false
        })

        cy.visit('/text-box')
        textBoxPage.writeFullName(`${this.data['fullName']}`)
        textBoxPage.writeEmail(`${this.data['email']}`)
        textBoxPage.writeCurrentAddress(`${this.data['currentAddress']}`)
        textBoxPage.writePermanentAddress(`${this.data['permanentAddress']}`)
        textBoxPage.clickOnSubmitButton()
        cy.get('input[id="userEmail"]').invoke('css', 'border').should('contain', 'rgb(255, 0, 0)')
    })
})