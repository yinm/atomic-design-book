import React from 'react'
import Balloon from './index'

export default stories => stories
  .add('2文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
  .add('absolute coordinate position', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>左上から200px</Balloon>)
