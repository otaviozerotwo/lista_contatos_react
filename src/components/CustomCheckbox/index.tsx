import { ElementType, InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { HiddenCheckbox, Label } from './styles'

interface IconCheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  CheckedIcon: ElementType<IconBaseProps>
  UncheckedIcon: ElementType<IconBaseProps>
  size?: number
  checkedColor?: string
  uncheckedColor?: string
}

const CustomCheckbox = ({
  checked,
  onChange,
  CheckedIcon,
  UncheckedIcon,
  size = 28,
  checkedColor = '#e63946',
  uncheckedColor = '#aaa'
}: IconCheckboxProps) => {
  return (
    <Label>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      {checked ? (
        <CheckedIcon size={size} color={checkedColor} />
      ) : (
        <UncheckedIcon size={size} color={uncheckedColor} />
      )}
    </Label>
  )
}

export default CustomCheckbox
