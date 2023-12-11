/// <reference types="cypress" />

describe('Testing Home Page', () => {
    beforeEach(() =>{
        cy.visit('QE-index.html#');
    })
     
    it('Test 1 Verify login form input fields are present', () => {
        cy.get('#inputEmail').should('exist');
        cy.get('#inputPassword').should('exist');
        cy.get('button[type="submit"]').should('exist');
        cy.get('#inputEmail').type('your-email@example.com');
        cy.get('#inputPassword').type('your-password');
    });
        
    it('Test 2 Verify 3 values in the listgroup, second list items', () => {
        cy.get('.list-group li')
          .should('have.length', 3); 
        cy.get('.list-group li')
          .eq(1) 
          .should('contain.text', 'List Item 2');
        cy.get('.list-group li')
          .eq(1) 
          .find('.badge')
          .should('have.text', '6');
    });
     
    it('Test 3 Verify that "Option 1" is default value, and select "Option 3"', () => {
        cy.get('.dropdown #dropdownMenuButton').should('be.visible').and('contain','Option 1');
        cy.get('.dropdown #dropdownMenuButton').click();
        cy.get('.dropdown-menu > :nth-child(3)').click()
          .should('contain','Option 3');
    });
        
    it('Test 4 Verify buttons state', () => {
        cy.get('#test-4-div > .btn-primary').should('be.enabled');
        cy.get('#test-4-div > .btn-secondary').should('be.disabled');
    });
         
    it('Test 5 Verify that after clicking on button success message is displayed and button is disabled', () => {
        cy.wait(5000);
        cy.get('div#test-5-div #test5-button').click();
        cy.get('.alert-success').should('contain','You clicked a button!').and('be.visible');
        cy.get('div#test-5-div #test5-button').should('be.disabled');
    });
       
    it('Test 6 Verify the value of a cell', () => {
        const getCellValue = (rowIndex, colIndex) => {
            const tableSelector = 'div>.table-bordered';
            return cy
              .get(`${tableSelector} tbody tr`)
              .eq(rowIndex)
              .find('td')
              .eq(colIndex)
              .invoke('text');
            };
        getCellValue(2, 2).then((cellValue) => {
        expect(cellValue.trim()).to.equal('Ventosanzap');
        });
    });
});