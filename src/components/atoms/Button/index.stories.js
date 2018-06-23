import React from 'react'
import { Button, PrimaryButton } from './index'

export default stories => stories
  .add('default', () => <Button>default</Button>)
  .add('primary', () => <PrimaryButton>Primary</PrimaryButton>)
