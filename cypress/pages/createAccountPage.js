class CreateAccountPage {
  elements = {
    nome: () => cy.get('#reg_billing_first_name'),
    sobrenome: () => cy.get('#reg_billing_last_name'),
    email: () => cy.get('#reg_email'),
    senha: () => cy.get('#reg_password'),
    btn: () => cy.get(':input[type=submit]')
  }

  visit() { cy.visit('/minha-conta'); }
  create(email, senha, nome, sobrenome) {
        cy.visit('/minha-conta');
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type(senha);
        cy.get('button[name="register"]').click();

        // After registration, billing fields should appear
        cy.get('#billing_first_name').should('exist').type(nome);
        cy.get('#billing_last_name').type(sobrenome);
    }
}
export default new CreateAccountPage();
