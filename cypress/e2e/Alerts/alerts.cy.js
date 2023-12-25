import {AlertsPage} from "../../Pages/alertsPage/AlertsPage";

const alertsPage = new AlertsPage()
describe('Alerts Page - Functionalities', () => {
    it('Alert is displayed after click on first button',()=>{
        //STEP - Go to Alerts Page
        cy.visit('/alerts')
        //STEP - Click on first button
        alertsPage.clickOnInmediateAlertButton()

        cy.wrap(new Promise((resolve, reject) => {
            //STEP - Wait until Alert is displayed
            cy.on('window:alert', msg => {
                try {
                    expect(msg).to.equal('You clicked a button')
                } catch ( err ) {
                    return reject(err);
                }
                resolve();
            });
        }), {timeout: 10000});
    } )
    it('Confirm is displayed after click on second button',()=>{
        //STEP - Go to Alerts Page
        cy.visit('/alerts')
        //STEP - Click on second button
        alertsPage.clickOn5SecAlertButton()
        cy.wrap(new Promise((resolve, reject) => {
            //STEP - Wait for 5 seconds - Alert should be displayed
            cy.on('window:alert', msg => {
                try {
                    expect(msg).to.eq('This alert appeared after 5 seconds');
                } catch ( err ) {
                    return reject(err);
                }
                resolve();
            });
        }), {timeout: 10000});
    });
})