import React from 'react'
import styles from './styles.css'

const txtFactroy = role => ({ tag:Tag = 'p', size = 'm', className, ...props }) => (
  <Tag className={ [ styles[role], styles[size], className ].join(' ') }
       { ...props } />
)

const Txt = txtFactroy('default')
export default Txt

export const InfoTxt = txtFactroy('info')
export const WarningTxt = txtFactroy('warning')