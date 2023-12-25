export class TextBoxPage {

    writeFullName = (fullName)=>{
        cy.get('input[placeholder="Full Name"]').type(fullName)
    }

    writeEmail = (email)=>{
        cy.get('input[id="userEmail"]').type(email)
    }

    writeCurrentAddress = (currentAddress)=>{
        cy.get('textarea[id="currentAddress"]').type(currentAddress)
    }

    writePermanentAddress = (permanentAddress)=>{
        cy.get('textarea[id="permanentAddress"]').type(permanentAddress)
    }

    clickOnSubmitButton = ()=>{
        cy.get('button[id="submit"]').click()
    }
}
