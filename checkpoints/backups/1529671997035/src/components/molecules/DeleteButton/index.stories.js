import React from 'react'
import { action } from '@storybook/addon-actions'
import DeleteButton from './index'
import { withStyle } from '../../utils/decorators'

export default stories => stories
  .add('default', () => withStyle({ margin: '50px' }) (
    <DeleteButton onClick={ action('削除ボタンがクリクされました') } />
  ))
