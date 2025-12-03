class CartActions {
  addProduct() {
        // Visit homepage and click the first product link to avoid hard-coded slugs
        cy.visit('/');
        cy.get('a[href*="/produto"]').first().click();
        cy.get('.single_add_to_cart_button').click();
    }
  goToCheckout(){
    cy.get('.woocommerce-message a').click();
    cy.get('.checkout-button').click();
  }
}
export default new CartActions();
