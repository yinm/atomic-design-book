import React from 'react'
import Balloon from './index.js'

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
