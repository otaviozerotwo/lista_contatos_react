import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactClass from '../../models/Contact'
import * as S from './styles'
import { Button } from '../../styles'
import { addAsFavorite, edit, remove } from '../../store/reducers/contact'
import CustomCheckbox from '../CustomCheckbox'

type Props = ContactClass

const Contact = ({
  id,
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  category,
  favorite
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (
      originalName.length > 0 &&
      originalEmail.length > 0 &&
      originalPhone.length > 0
    ) {
      setName(originalName)
      setEmail(originalEmail)
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function editCancel() {
    setIsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
  }

  function handleFavorite(e: ChangeEvent<HTMLInputElement>) {
    dispatch(addAsFavorite({ id, favorite: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={name}>
        <CustomCheckbox checked={favorite} onChange={handleFavorite} />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {originalName}
        </S.Title>
      </label>
      <S.Tag category={category}>{category}</S.Tag>
      <S.Content>
        <input
          type="text"
          disabled={!isEditing}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          disabled={!isEditing}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          disabled={!isEditing}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.Content>
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(edit({ id, name, phone, email, category, favorite }))
                setIsEditing(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelRemoveButton onClick={editCancel}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
