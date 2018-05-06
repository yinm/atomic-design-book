import React from 'react'
import styles from './styles.css'

export const TrashCanIcon = ({
  height = 20,
  width = 20,
  className = '',
  onClick,
  ...props,
}) => {
  if (onClick) className += `${ styles.clickable }`

  return (
    <img
      src="/icons/trash-can.svg"
      alt=""
      height={ height }
      width={ width }
      className={ className }
      onClick={ onClick }
      { ...props }
    />
  )
}
