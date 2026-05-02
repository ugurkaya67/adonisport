/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  products: {
    index: typeof routes['products.index']
  }
  signup: typeof routes['signup']
  newAccount: {
    store: typeof routes['new_account.store']
  }
  login: typeof routes['login']
  session: {
    store: typeof routes['session.store']
  }
  logout: typeof routes['logout']
}
