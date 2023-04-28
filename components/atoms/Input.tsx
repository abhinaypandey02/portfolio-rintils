import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'
const ERROR_MESSAGES = {
  required: 'This field is required',
  minLength: 'Length should be greator than 5',
  invalid: 'Invalid Credentials',
}
export default function Input({
  register,
  label,
  errorCode,
  placeholder,
  type,
  options,
}: {
  register: UseFormRegisterReturn
  label?: string
  placeholder?: string
  errorCode?: any
  type?: string
  options?: { title: string; code: string }[]
}) {
  let Component: any = 'input'
  if (type === 'textarea') Component = 'textarea'
  return (
    <div>
      <div>{label}</div>
      {type === 'select' && (
        <select {...register}>
          {options?.map((option) => (
            <option value={option.code} key={option.code}>
              {option.title}
            </option>
          ))}
        </select>
      )}
      {type !== 'select' && <Component type={type} placeholder={placeholder} {...register} />}
      <small>{ERROR_MESSAGES[errorCode as keyof typeof ERROR_MESSAGES]}</small>
    </div>
  )
}
