import React from 'react'
import styles from './styles.css'
import { PrimaryButton } from '../../atoms/Button/index'
import TextBox from '../../atoms/TextBox/index'

const MailAuthForm = ({ onSubmit, ...props }) => (
  <form { ...props }>
    <p className={ styles.label }>メールアドレスを入力してください</p>
    <div>
      <TextBox className={ styles.textbox }/>
      <PrimaryButton onClick={ onSubmit }>認証メール送信</PrimaryButton>
    </div>
  </form>
)

export default MailAuthForm
