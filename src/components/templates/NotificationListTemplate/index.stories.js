import React from 'react'
import { action } from '@storybook/addon-actions'
import NotificationListTemplate from './index'
import {
  notifications,
  navigations,
  breadcrumb,
} from '../../../mock/data'

export default stories => stories
  .add('default', () => {
    return (
      <NotificationListTemplate
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        onClickDeleteNotification={ action('delete button is clicked.') }
      />
    )
  })
