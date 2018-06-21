import React from 'react'
import { action } from '@storybook/addon-actions'
import { TrashCanIcon, ChevronRightIcon } from './index'

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon/>)
  .add('clickable', () => <TrashCanIcon onClick={ action('icon is clicked') }/>)
  .add('ChevronRightIcon', () => <ChevronRightIcon/>)
