import React from 'react'
import Heading from './index.js'

export default stories => stories
  .add('default', () => <Heading>見出し</Heading>)
  .add('level1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('level1 visual2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1、見た目2</Heading>)