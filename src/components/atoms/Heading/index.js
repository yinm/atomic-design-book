import React from 'react'
import styles from './styles.css'

export const HeadingPresenter = ({
  children,
  tag:Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles[`h${ visualLevel }`], className ].join(' ')} { ...props }>{children}</Tag>
)

export const HeadingContainer = ({
  children,
  presenter,
  level = 2,
  visualLevel,
  ...props,
}) => {
  level = Math.max(1, Math.min(6, level))
  visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level
  const tag = `h${ level }`

  return presenter({ children, tag, visualLevel, props })
}

const Heading = props => (
  <HeadingContainer presenter={ presenterProps => <HeadingPresenter { ...presenterProps } /> } { ...props } />
)

export default Heading
