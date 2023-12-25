export class MainPage {

    clickOnCard =  (cardName)=>{
        cy.get('div[class="card mt-4 top-card"]').contains(cardName).click()
    }
}
