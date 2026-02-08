import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Button, Input } from '../../styles'
import { changeTerm } from '../../store/reducers/filter'
import FilterCard from '../../components/FilterCard'
import * as enums from '../../utils/enums/Contact'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
            <S.Filters>
              <FilterCard
                value={enums.Category.FAMILY}
                criterion="categoria"
                caption="família"
              />
              <FilterCard
                value={enums.Category.FRIENDS}
                criterion="categoria"
                caption="amigos"
              />
              <FilterCard
                value={enums.Category.WORK}
                criterion="categoria"
                caption="trabalho"
              />
              <FilterCard
                value={enums.Category.OTHERS}
                criterion="categoria"
                caption="outros"
              />
              <FilterCard criterion="favoritos" caption="favoritos" />
              <FilterCard criterion="todos" caption="todos" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
