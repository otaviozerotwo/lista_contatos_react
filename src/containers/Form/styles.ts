import styled from 'styled-components'
import { Button } from '../../styles'
import variables from '../../styles/variables'

export const FormStyle = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`

export const Options = styled.div`
  margin: 16px 0;

  p {
    margin-bottom: 16px;
  }

  label {
    margin-right: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
  margin-right: 16px;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.dodgerBlue};
  width: 100%;
  font-size: 16px;
`
