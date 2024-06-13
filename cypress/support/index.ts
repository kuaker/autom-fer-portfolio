declare namespace Cypress {
    interface Chainable {
        getByDataTestId(id: string): Chainable<JQuery<HTMLElement>>;
        getByName(name: string): Chainable<JQuery<HTMLElement>>;
    }
}
