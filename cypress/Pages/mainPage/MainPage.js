export class MainPage {

    clickOnCard =  ()=>{
        cy.get('div[class="card mt-4 top-card"]').contains('Elements').click()
    }
}
