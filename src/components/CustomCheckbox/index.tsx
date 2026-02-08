import { InputHTMLAttributes } from 'react'
import { HiddenCheckbox, Label, Star } from './styles'

interface IconCheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  size?: number
  checkedColor?: string
  uncheckedColor?: string
}

const CustomCheckbox = ({
  checked,
  onChange,
  size = 28,
  checkedColor = '#e63946',
  uncheckedColor = '#aaa'
}: IconCheckboxProps) => {
  return (
    <Label>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <Star
        role="img"
        aria-hidden={false}
        checked={checked}
        size={size}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
      />
    </Label>
  )
}

export default CustomCheckbox
