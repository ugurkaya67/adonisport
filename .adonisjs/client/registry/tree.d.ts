/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  products: {
    index: typeof routes['products.index']
    store: typeof routes['products.store']
    update: typeof routes['products.update']
    destroy: typeof routes['products.destroy']
  }
  signup: typeof routes['signup']
  newAccount: {
    store: typeof routes['new_account.store']
  }
  login: typeof routes['login']
  session: {
    store: typeof routes['session.store']
  }
  admin: {
    index: typeof routes['admin.index']
  }
  categories: {
    index: typeof routes['categories.index']
    store: typeof routes['categories.store']
  }
  brands: {
    index: typeof routes['brands.index']
    store: typeof routes['brands.store']
  }
  logout: typeof routes['logout']
}
