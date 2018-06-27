import React from 'react'
import { HeadingContainer } from './index'

describe('HeadingContainer', () => {
  const presenter = props => props

  it('見た目レベルが指定されていないとき見出しレベルに合わせる', () => {
    const { visualLevel } = HeadingContainer({
      presenter,
      level: 1,
    })
    expect(visualLevel).toBe(1)
  })

  it('見た目レベルが指定されている時は見出しレベルに合わせない', () => {
    const { visualLevel } = HeadingContainer({
      presenter,
      level: 1,
      visualLevel: 2,
    })
    expect(visualLevel).toBe(2)
  })

  it('1未満のレベルは1とする', () => {
    const { tag, visualLevel } = HeadingContainer({
      presenter,
      level: 0,
      visualLevel: 0,
    })
    expect(tag).toBe('h1')
    expect(visualLevel).toBe(1)
  })

  it('7以上のレベルは6とする', () => {
    const { tag, visualLevel } = HeadingContainer({
      presenter,
      level: 7,
      visualLevel: 7,
    })
    expect(tag).toBe('h6')
    expect(visualLevel).toBe(6)
  })
})
