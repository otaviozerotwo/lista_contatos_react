import styled from 'styled-components'
import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  background-color: ${variables.spaceIndigo};

  div {
    background-color: ${variables.spaceIndigo};
  }
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
