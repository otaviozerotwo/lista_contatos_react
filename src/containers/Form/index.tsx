import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../../store/reducers/contact'
import * as enums from '../../utils/enums/Contact'
import { Input, MainContainer, SaveButton, Title } from '../../styles'
import { FormStyle, Option, Options } from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState(enums.Category.OTHERS)

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      add({
        name,
        phone,
        email,
        category,
        favorite: false
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Novo Contato</Title>
      <FormStyle onSubmit={addContact}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <Options>
          <p>Categoria</p>

          {Object.values(enums.Category).map((category) => (
            <Option key={category}>
              <input
                type="radio"
                value={category}
                onChange={(e) => setCategory(e.target.value as enums.Category)}
                name="categoria"
                id={category}
                defaultChecked={category === enums.Category.OTHERS}
              />{' '}
              <label htmlFor={category}>{category}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </FormStyle>
    </MainContainer>
  )
}

export default Form
