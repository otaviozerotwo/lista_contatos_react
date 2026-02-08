import styled from 'styled-components'

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`
