import React from 'react'

const Button = ({text, bgColor, textColor}) => {

  const backgroundColor = bgColor || 'bg-black';
  const color = textColor || 'text-neutral-100';

  return (
    <button  className={`px-3 py-2 w-fit text-sm font-normal active:bg-black/70 active:scale-90 transition-all ${backgroundColor} ${color}`}>
        {text}
    </button>
  )
}

export default Button