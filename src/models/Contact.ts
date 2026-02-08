import * as enums from '../utils/enums/Contact'

class Contact {
  id: number
  name: string
  email: string
  phone: string
  category: enums.Category
  favorite: boolean

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    category: enums.Category,
    favorite: boolean
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.category = category
    this.favorite = favorite
  }
}

export default Contact
