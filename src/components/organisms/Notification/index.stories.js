import React from 'react'
import { action } from '@storybook/addon-actions'
import Notification from './index'

const notification = {
  id: 0,
  thumbnail: '/mock/images/img01.jpg',
  title: 'コンポーネント指向でUIを設計しよう！第1話',
  channelName: 'UIチャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000,
}

export default stories => stories
  .add('default', () => (
    <Notification program={ notification } onClickDelete={ action('削除ボタンがクリックされました') } />
  ))
