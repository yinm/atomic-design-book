import React from 'react'
import Txt, { InfoTxt, WarningTxt } from './index.js'

export default stories => stories
  .add('text - S', () => <Txt size="s">テキストを表示</Txt>)
  .add('text - M', () => <Txt>テキストを表示</Txt>)
  .add('text - L', () => <Txt size="l">テキストを表示</Txt>)
  .add('information text - S', () => <InfoTxt size="s">情報テキストを表示</InfoTxt>)
  .add('information text - M', () => <InfoTxt>情報テキストを表示</InfoTxt>)
  .add('information text - L', () => <InfoTxt size="l">情報テキストを表示</InfoTxt>)
  .add('warning text - S', () => <WarningTxt size="s">警告テキストを表示</WarningTxt>)
  .add('warning text - M', () => <WarningTxt>警告テキストを表示</WarningTxt>)
  .add('warning text - L', () => <WarningTxt size="l">警告テキストを表示</WarningTxt>)