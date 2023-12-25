import {MainPage} from '../../Pages/mainPage/MainPage'
import {ElementsPage} from "../../Pages/elementsPage/ElementsPage";

const main = new MainPage()
const elements = new ElementsPage()

describe('Main Page - Cards Navigation and Functionalities', () => {
    it('Element card is clickable and redirects to Elements Page', () => {
        cy.visit('/')
        main.clickOnCard("Elements")
        cy.url().should('include', '/elements')
    });

    it('After Open elements we can select  ==> Text box <== item and redirects to Text box page',  ()=>{
        cy.visit('/')
        main.clickOnCard('Elements')
        elements.clickOnTextBox()
        cy.url().should('include', '/text-box')

    })
});