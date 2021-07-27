/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Initial Load', () => {
    it('Interactions should be visible', () => {
      // https://on.cypress.io/should
      cy.get('#interaction_container')
        .should('be.visible')
        .find('h2')
        .first()
        .should('have.text', 'Interactions')
      cy.get('#interaction_card1')
        .should('be.visible')
        .find('h1')
        .first()
        .should('have.text', 'Want printer paper')
      cy.get('#interaction_card2')
        .should('be.visible')
        .find('h1')
        .first()
        .should('have.text', 'Looking for business card paper')

      // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    })

    it('Messages and Notes should not be visible', () => {
      // https://on.cypress.io/and
      cy.get('#messages_container').should('not.be.visible')
      cy.get('#notes_container').should('not.be.visible')
    })
  })

  describe('After Interaction Clicked', () => {
    it('Interaction should change color', () => {
      cy.get('#interaction_card1')
        .click()
        .should('have.css', 'background-color', 'rgb(71, 252, 255)')
    })

    it('Messages and Notes should be visible', () => {
      // https://on.cypress.io/and
      cy.get('#interaction_card1').click()
      cy.get('#messages_container').should('be.visible')
      cy.get('#notes_container').should('be.visible')
    })
  })

  describe('After Message Button Click', () => {
    it('when respond to customer is clicked and filled out', () => {
      cy.get('#interaction_card1').click()
      cy.get('#messages_container').find('button').click()
      cy.get('#message_card3').should('be.visible')
      cy.get('#message_modal')
        .should('be.visible')
        .find('textarea')
        .type('Sure, I can get you that paper')
        .should('have.value', 'Sure, I can get you that paper')
      cy.get('#createMessageButton').click()
      cy.get('#message_card4').should('be.visible')
    })
  })
  describe('After note Button Click', () => {
    it('when add note is clicked and filled out', () => {
      cy.get('#interaction_card1').click()
      cy.get('#notes_container').should('be.visible').find('button').click()
      cy.get('#note_modal')
        .should('be.visible')
        .find('textarea')
        .type('I love working for Dunder Mifflin')
        .should('have.value', 'I love working for Dunder Mifflin')
      cy.get('#createNoteButton').click()
      cy.get('#note_card1').should('be.visible')
    })
  })
})
