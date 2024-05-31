/// <reference types="cypress" />
describe('Lightbox Test', () => {
    // Avant chaque test, visiter la page
    beforeEach(() => {
      cy.visit('../../app/lightbox.html'); // Remplacez 'path/to/your/index.html' par le chemin réel de votre fichier HTML
    });
  
    it('should open the lightbox when the image is clicked', () => {
      // Sélectionner l'image et cliquer dessus
      cy.get('.relative.w-64.cursor-pointer.shadow-md img')
        .click();
      
      // Vérifier si la lightbox est visible
      cy.get('.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40')
        .should('be.visible');
    });
  });