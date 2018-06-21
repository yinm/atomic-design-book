import React from 'react'
import styles from './styles.css'

export const TrashCanIconPresenter = ({
  height = 20,
  width = 20,
  ...props,
}) => (
  <img
    src="/icons/trash-can.svg"
    alt=""
    height={ height }
    width={ width }
    { ...props }
  />
)

export const IconContainer = ({
  presenter,
  onClick,
  className = '',
  ...props,
}) => {
  if (onClick) className += `${ styles.clickable }`
  return presenter({ onclick, className, ...props })
}

export const TrashCanIcon = props => (
  <IconContainer
    presenter={ presenterProps => <TrashCanIconPresenter { ...presenterProps } /> }
    { ...props }
  />
)

export const ChevronRightIconPresenter = ({
  height = 20,
  width = 20,
  ...props,
}) => (
  <img
    src="/icons/chevron-right.svg"
    alt=""
    height={ height }
    width={ width }
    { ...props }
  />
)

export const ChevronRightIcon = props => (
  <IconContainer
    presenter={ presenterProps => <ChevronRightIconPresenter { ...presenterProps } /> }
    { ...props }
  />
)
