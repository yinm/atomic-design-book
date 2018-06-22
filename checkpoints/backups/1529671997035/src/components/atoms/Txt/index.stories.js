import React from 'react'
import Txt, { InfoTxt, WarningTxt } from './index'

export default stories => stories
  .add('text - S', () => <Txt size="s">テキストを表示</Txt>)
  .add('text - M', () => <Txt>テキストを表示</Txt>)
  .add('text - L', () => <Txt size="l">テキストを表示</Txt>)
  .add('infotext - S', () => <InfoTxt size="s">情報テキストを表示</InfoTxt>)
  .add('infotext - M', () => <InfoTxt>情報テキストを表示</InfoTxt>)
  .add('infotext - L', () => <InfoTxt size="l">情報テキストを表示</InfoTxt>)
  .add('warningtext - S', () => <WarningTxt size="s">警告テキストを表示</WarningTxt>)
  .add('warningtext - M', () => <WarningTxt>警告テキストを表示</WarningTxt>)
  .add('warningtext - L', () => <WarningTxt size="l">警告テキストを表示</WarningTxt>)
