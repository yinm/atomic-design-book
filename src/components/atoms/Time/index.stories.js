import React from 'react'
import Time from './index.js'

export default stories => stories
  .add('default', () => <Time>1507032000000</Time>)
  .add('HH:mm', () => <Time format="HH:mm">1507032000000</Time>)
  .add('invalid time expression', () => <Time>無効な時間表現</Time>)