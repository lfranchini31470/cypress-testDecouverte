/// <reference types="cypress" />
context('Retrieve element.s', () => {
    beforeEach(() => {
    cy.visit('../../app/index.html');
    });
    it('shows examples of get() method', () => {
    cy.get('button'); // Tag
    cy.get('#submit'); // Id
    cy.get('.btn'); // Class
    });
   }); 
   
