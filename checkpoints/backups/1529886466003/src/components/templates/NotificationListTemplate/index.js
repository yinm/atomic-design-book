import React from 'react'
import styles from './styles.css'
import StickyHeaderLayout from '../../atoms/StickyHeaderLayout/index'
import PageHeader from '../../organisms/PageHeader/index'
import Header from '../../organisms/Header/index'
import NotificationList from '../../organisms/NotificationList/index'

const NotificationListTemplate = ({ notifications, navigations, breadcrumb, onClickDeleteNotification }) => (
  <StickyHeaderLayout>
    <Header navigations={ navigations } />
    <main className={ styles.main }>
      <PageHeader navigations={ breadcrumb }/>
      <NotificationList
        className={ styles.notifications }
        programs={ notifications }
        onClickDelete={ onClickDeleteNotification }
      />
    </main>
  </StickyHeaderLayout>
)

export default NotificationListTemplate
