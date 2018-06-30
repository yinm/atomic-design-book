import React from 'react'
import { testA11y } from '../../utils/a11y'
import NotificationListTemplate from './index'
import {
  notifications,
  navigations,
  breadcrumb,
} from '../../../mock/data'

describe('NotificationListTemplate', () => {
  it('アクセシビリティに問題がない', () => {
    const config = {
      rules: {
        'color-contrast': { enabled: false },
      },
    }

    return expect(
      testA11y(
        <NotificationListTemplate
          notifications={ notifications }
          navigations={ navigations }
          breadcrumb={ breadcrumb }
          onClickDeleteNotification={ () => {} }
        />,
        config
      )
        .then(results => results.violations.length)
    ).resolves.toBe(0)
  })
})
