import styled from 'styled-components'
import * as enums from '../../utils/enums/Contact'
import variables from '../../styles/variables'
import { Button } from '../../styles'

type TagProps = {
  category?: enums.Category
}

function setBackgroundColor(props: TagProps): string {
  if (props.category === enums.Category.FAMILY) return variables.yellow
  if (props.category === enums.Category.FRIENDS) return variables.green
  if (props.category === enums.Category.WORK) return variables.red

  return variables.darkBlue
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weigth: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weigth: bold;
  color: #fff;
  background-color: ${(props) => setBackgroundColor(props)};
  border-radius: 8px;
  margin-top: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Content = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;

  input {
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    resize: none;
    border: none;
    background-color: transparent;
  }
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
