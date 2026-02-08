import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filter'
import contactsReducer from './reducers/contact'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
