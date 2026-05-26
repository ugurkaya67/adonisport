/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  signup: typeof routes['signup']
  newAccount: {
    store: typeof routes['new_account.store']
  }
  login: typeof routes['login']
  session: {
    store: typeof routes['session.store']
  }
  products: {
    index: typeof routes['products.index']
    store: typeof routes['products.store']
  }
  admin: {
    index: typeof routes['admin.index']
  }
  categories: {
    index: typeof routes['categories.index']
    store: typeof routes['categories.store']
  }
  logout: typeof routes['logout']
}
