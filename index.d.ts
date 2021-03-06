/// <reference types="cypress" />

interface UserData {
  username?: string;
  password?: string;
  fakeLogin?: {
    access_token: string;
    refresh_token: string;
    id_token: string;
    account: object;
  };
}

interface KcTokens {
  access_token: string;
  refresh_token: string;
  id_token: string;
}

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  interface Chainable {
    kcLogin(user: string | UserData): Chainable<KcTokens>;
    kcLogout(): Chainable<void>;
    kcFakeLogin(user: string | UserData, visitUrl?: string): Chainable<void>;
  }
}
