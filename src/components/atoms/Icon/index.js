import React from 'react'

export const TrashCanIcon = ({
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
