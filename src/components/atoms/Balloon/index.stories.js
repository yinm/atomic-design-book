/*
訂正：紙面掲載のコードにて、
import { withStyle } from '../../utils/decorators.js';
という記述がありますが、この 1 行は必要ありません。
代わりに、
import { withNotes } from '@storybook/addon-notes';
と記述して、withNotes のインポートが必要です。
お手数ですが置き替えて進めてください。
*/

import React from 'react';
import Balloon, { BalloonTip } from './index.js';
import { TrashCanIcon } from '../Icon/index.js';
import { withStyle } from '../../utils/decorators.js';
import { withNotes } from '@storybook/addon-notes'

const note = withNotes('読みやすさを考慮すると 10 文字までが適当。11 文字以上を表示したい場合は別のデザインを検討すること。')

export default stories => stories
  .add('2文字', () => <Balloon>次へ</Balloon>)
  .add('4文字', () => <Balloon>削除する</Balloon>)
  .add('10文字ラベル', note(() => <Balloon>削除したかったらする</Balloon>))
  .add('twenty', () => <Balloon>削除したかったらするけど、どうしたいかな</Balloon>)
  .add('thirty', () => <Balloon>削除したかったらするけど、どうしたいかな。嫌なら、やめようか</Balloon>)
  .add('thirty and linefeed', () => <Balloon>削除したかったらするけど、どうしたいかな。<br />嫌なら、やめようか</Balloon>)
