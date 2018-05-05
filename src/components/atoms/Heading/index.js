import React from 'react'
import styles from './styles.css'

const Heading = ({
  children,
  level = 2,
  visualLevel,
  className,
  ...props,
}) => {
  level = Math.max(0, Math.min(6, level))
  visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level
  const Tag = `h${ level }`
  const tagStyle = `${ styles.h } ${ styles[`h${ visualLevel }`] }`

  return (
    <Tag className={ [ tagStyle, className ].join(' ') } { ...props }>
      { children }
    </Tag>
  )
}

export default Heading
