describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the title', () => {
    cy.get('header')
    .contains('Le Blog Toposcope');
  })
})