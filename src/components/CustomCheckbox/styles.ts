import styled from 'styled-components'

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

interface StarProps {
  size?: number
  checked?: boolean
  checkedColor?: string
  uncheckedColor?: string
}
// gerado pelo copilot (tentei de todas as formas mas não consegui fazer sem usar IA)
export const Star = styled.span<StarProps>`
  display: inline-block;
  width: ${(p) => (p.size ?? 28) + 'px'};
  height: ${(p) => (p.size ?? 28) + 'px'};
  box-sizing: border-box;
  /* Star shape */
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: ${(p) =>
    p.checked ? (p.checkedColor ?? '#e63946') : '#aaa'};
  border: ${(p) =>
    p.checked ? 'none' : `2px solid ${p.uncheckedColor ?? '#aaa'}`};
  transition:
    background-color 180ms ease,
    transform 120ms ease,
    border-color 180ms ease;
  transform-origin: 50% 50%;
  /* little pop when checked */
  ${(p) => (p.checked ? 'transform: scale(1.02);' : 'transform: scale(1);')}
`
