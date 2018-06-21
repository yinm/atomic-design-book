import React from 'react'
import styles from './styles.css'

export const Heading1 = ({ children, className, ...props }) => <h1 className={[ styles.h1, className ].join(' ') } { ...props }>{ children }</h1>
export const Heading2 = ({ children, className, ...props }) => <h2 className={[ styles.h2, className ].join(' ') } { ...props }>{ children }</h2>
export const Heading3 = ({ children, className, ...props }) => <h3 className={[ styles.h3, className ].join(' ') } { ...props }>{ children }</h3>
export const Heading4 = ({ children, className, ...props }) => <h4 className={[ styles.h4, className ].join(' ') } { ...props }>{ children }</h4>
export const Heading5 = ({ children, className, ...props }) => <h5 className={[ styles.h5, className ].join(' ') } { ...props }>{ children }</h5>
export const Heading6 = ({ children, className, ...props }) => <h6 className={[ styles.h6, className ].join(' ') } { ...props }>{ children }</h6>
