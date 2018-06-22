import React from 'react'
import Heading, { HeadingUnderlined } from './index'

export default stories => stories
  .add('default', () => <Heading>見出し</Heading>)
  .add('level1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('level1, visual2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1、見た目2</Heading>)
  .add('underlined', () => <HeadingUnderlined>下線付き</HeadingUnderlined>)
  .add('underlined, level1', () => <HeadingUnderlined level={ 1 }>下線付き、見出しレベル1</HeadingUnderlined>)
  .add('underlined, level1, visual2', () => <HeadingUnderlined level={ 1 } visualLevel={ 2 }>下線付き、見出しレベル1、見た目2</HeadingUnderlined>)
