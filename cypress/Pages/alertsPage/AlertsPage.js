export class AlertsPage {

    clickOnInmediateAlertButton() {
        cy.get('#alertButton').click();
    }
    clickOn5SecAlertButton() {
        cy.get('#timerAlertButton').click();
    }
}