/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'products.index': {
    methods: ["GET","HEAD"],
    pattern: '/products',
    tokens: [{"old":"/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.index']['types'],
  },
  'signup': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['signup']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'login': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['login']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'admin.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin.index']['types'],
  },
  'categories.index': {
    methods: ["GET","HEAD"],
    pattern: '/categories',
    tokens: [{"old":"/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.index']['types'],
  },
  'categories.store': {
    methods: ["POST"],
    pattern: '/categories',
    tokens: [{"old":"/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.store']['types'],
  },
  'brands.index': {
    methods: ["GET","HEAD"],
    pattern: '/brands',
    tokens: [{"old":"/brands","type":0,"val":"brands","end":""}],
    types: placeholder as Registry['brands.index']['types'],
  },
  'brands.store': {
    methods: ["POST"],
    pattern: '/brands',
    tokens: [{"old":"/brands","type":0,"val":"brands","end":""}],
    types: placeholder as Registry['brands.store']['types'],
  },
  'products.store': {
    methods: ["POST"],
    pattern: '/products',
    tokens: [{"old":"/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.store']['types'],
  },
  'products.destroy': {
    methods: ["DELETE"],
    pattern: '/products/:id',
    tokens: [{"old":"/products/:id","type":0,"val":"products","end":""},{"old":"/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.destroy']['types'],
  },
  'logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['logout']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
