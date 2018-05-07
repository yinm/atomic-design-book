import React from 'react'
import { action } from '@storybook/addon-actions'
import DeleteButton from './index.js'

export default stories => stories
  .add('default', () => (
    <DeleteButton onClick={ action('削除ボタンがクリックされました') }/>
  ))
