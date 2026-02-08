import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Gabriela Santos',
      phone: '(95) 97441-0051',
      email: 'email@email.com',
      category: enums.Category.FRIENDS,
      favorite: true
    },
    {
      id: 2,
      name: 'Jeferson Souza',
      phone: '(71) 98516-2294',
      email: 'email@email.com',
      category: enums.Category.WORK,
      favorite: false
    },
    {
      id: 3,
      name: 'Giovanna Siqueira',
      phone: '(61) 99232-9832',
      email: 'email@email.com',
      category: enums.Category.OTHERS,
      favorite: false
    },
    {
      id: 4,
      name: 'Mãe',
      phone: '(82) 98982-7875',
      email: 'email@email.com',
      category: enums.Category.FAMILY,
      favorite: true
    },
    {
      id: 5,
      name: 'Pai',
      phone: '(15) 97570-7216',
      email: 'email@email.com',
      category: enums.Category.FAMILY,
      favorite: true
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existingContact = state.items.find(
        (contact) => contact.phone === action.payload.phone
      )

      if (existingContact) {
        alert('Já existe um contato com esse número')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexOfContact = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexOfContact >= 0) {
        state.items[indexOfContact] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    addAsFavorite: (
      state,
      action: PayloadAction<{ id: number; favorite: boolean }>
    ) => {
      const indexOfContact = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexOfContact >= 0) {
        state.items[indexOfContact].favorite = action.payload.favorite
          ? true
          : false
      }
    }
  }
})

export const { add, edit, remove, addAsFavorite } = contactSlice.actions
export default contactSlice.reducer
