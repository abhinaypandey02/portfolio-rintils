import React from 'react'

const BUTTON_CLASSES = {
  'primary-outline': 'border border-primary text-white h-[72px]',
  primary: 'bg-primary text-black h-[60px]',
  secondary: 'bg-primary text-black h-[60px]',
  tertiary: 'bg-primary text-black h-[46px]',
}

type PROPS_TYPE = {
  variant?: keyof typeof BUTTON_CLASSES
  className?: string
  width?: number
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  id?: string
}

export default function Button(props: React.PropsWithChildren<PROPS_TYPE>) {
  const baseClass =
    'transition-colors duration-200 rounded-xl flex justify-center items-center disabled:bg-[#9d6cd2]'
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      style={{ width: props.width }}
      id={props.id}
      onClick={props.onClick}
      className={`${props.className} ${baseClass} ${BUTTON_CLASSES[props.variant || 'primary']}`}
    >
      {props.children}
    </button>
  )
}
