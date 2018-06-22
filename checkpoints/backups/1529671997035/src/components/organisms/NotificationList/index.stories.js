import React from 'react'
import { action } from '@storybook/addon-actions'
import NotificationList from './index'

const notifications = [
  {
    id: 0,
    thumbnail: '/mock/images/192/108/img01.jpg',
    title: 'コンポーネント指向でUIを設計しよう！第1話',
    channelName: 'UI channel',
    startAt: 1507032000000,
    endAt: 1507035600000,
  },
  {
    id: 1,
    thumbnail: '/mock/images/192/108/img02.jpg',
    title: 'コンポーネント2',
    channelName: 'UI channel',
    startAt: 1507035600000,
    endAt: 1507039200000,
  },
  {
    id: 2,
    thumbnail: '/mock/images/192/108/img01.jpg',
    title: 'コンポーネント1',
    channelName: 'UI channel',
    startAt: 1507032000000,
    endAt: 1507035600000,
  },
  {
    id: 3,
    thumbnail: '/mock/images/192/108/img02.jpg',
    title: 'コンポーネント2',
    channelName: 'UI channel',
    startAt: 1507035600000,
    endAt: 1507039200000,
  },
]

export default stories => stories
  .add('default', () => (
    <NotificationList programs={ notifications } onClickDelete={ action('削除ボタンがクリックされました') } />
  ))
