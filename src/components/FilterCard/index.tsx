import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Contact'
import * as S from './styles'

export type Props = {
  caption: string
  criterion: 'categoria' | 'favoritos' | 'todos'
  value?: enums.Category
}

const FilterCard = ({ caption, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const countContacts = () => {
    if (criterion === 'todos') return contacts.items.length
    if (criterion === 'categoria') {
      return contacts.items.filter((item) => item.category === value).length
    }
    if (criterion === 'favoritos') {
      return contacts.items.filter((item) => item.favorite === true).length
    }
  }

  const handleFilter = () => {
    dispatch(changeFilter({ criterion, value }))
  }

  const counter = countContacts()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={handleFilter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}

export default FilterCard
