interface Props {
  type: string,
  placeholder: string,
  value: string
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputPanel: React.FC<Props> = ({
  type,
  placeholder,
  value,
  handleOnChange
}) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required
    />
  )
}