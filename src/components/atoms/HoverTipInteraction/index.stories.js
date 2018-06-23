import React from 'react'
import HoverTipInteraction, { Tip, Marker } from './index'
import { withStyle } from '../../utils/decorators'

export default stories => stories
  .add('default', () => withStyle({ display: 'inline-block', margin: '50px' })(
    <HoverTipInteraction>
      <span>ホバーしてね</span>
      <Tip><span>チップだよ</span></Tip>
    </HoverTipInteraction>
  ))
  .add('マーカー', () => withStyle({ display: 'inline-block', margin: '50px' })(
    <HoverTipInteraction>
      <Marker><span>ホバーしてね</span></Marker>
      <Tip><span>チップだよ</span></Tip>
    </HoverTipInteraction>
  ))
