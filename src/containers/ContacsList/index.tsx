import { useSelector } from 'react-redux'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'
import Contact from '../../components/Contact'

const ContactsList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const handleFilter = () => {
    let filteredContacts = items

    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'categoria') {
        filteredContacts = filteredContacts.filter(
          (item) => item.category === value
        )
      } else if (criterion === 'favoritos') {
        filteredContacts = filteredContacts.filter(
          (item) => item.favorite === true
        )
      }

      return filteredContacts
    } else {
      return items
    }
  }

  const showFilteredResult = (count: number) => {
    let message = ''

    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'todos') {
      message = `${count} contato(s) encontrado(s) como: todos ${complement}`
    } else if (criterion === 'favoritos') {
      message = `${count} contato(s) encontrado(s) como: favoritos ${complement}`
    } else {
      message = `${count} contato(s) encontrado(s) como: "${`${criterion}=${value}`}" ${complement}`
    }

    return message
  }

  const contacts = handleFilter()
  const message = showFilteredResult(contacts.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {contacts.map((c) => (
          <li key={c.phone}>
            <Contact
              id={c.id}
              name={c.name}
              phone={c.phone}
              email={c.email}
              category={c.category}
              favorite={c.favorite}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactsList
