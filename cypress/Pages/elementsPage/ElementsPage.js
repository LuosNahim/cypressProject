export class ElementsPage {

    clickOnTextBox =  ()=>{
        cy.get('li[id="item-0"]').contains('Text Box').click()
    }
}
