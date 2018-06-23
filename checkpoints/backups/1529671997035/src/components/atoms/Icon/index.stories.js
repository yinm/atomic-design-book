import React from 'react'
import { action } from '@storybook/addon-actions'
import { TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon } from './index'

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon/>)
  .add('clickable', () => <TrashCanIcon onClick={ action('icon is clicked') }/>)
  .add('ChevronRightIcon', () => <ChevronRightIcon/>)
  .add('SearchIcon', () => <SearchIcon/>)
  .add('SettingsIcon', () => <SettingsIcon/>)
