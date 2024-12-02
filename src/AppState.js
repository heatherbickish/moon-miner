import { reactive } from 'vue'
import { ClickUpgrade } from "./models/ClickUpgrade.js"
import { AutoUpdrade } from "./models/AutoUpgrade.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  cheese: null,

  clickUpgrade: [
    new ClickUpgrade({
      id: 'probe',
      name: 'Probe',
      price: 50,
      quantity: 1,
      multiplier: 5
    }),
    new ClickUpgrade({
      id: 'chunk',
      name: 'Chunker',
      price: 150,
      quantity: 0,
      multiplier: 25
    })
  ],

  autoUpgrade: [
    new AutoUpdrade({
      id: 'slicer',
      name: 'Slice n Dicer',
      price: 1000,
      quantity: 0,
      mulitplier: 150
    }),
    new AutoUpdrade({
      id: 'grater',
      name: 'Turbo Grater',
      price: 5000,
      quantity: 0,
      mulitplier: 300
    }),
  ]
})

