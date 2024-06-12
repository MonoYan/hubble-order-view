import React from 'react'
import { Card } from 'antd'
import styles from './CommonInfo.module.scss'

const OthersInfo = ({ order }) => {
    return (
        <Card title="Others Infomation" className={styles.container}>
            <ul >
                <li>
                    <span className={styles.field}>Order Type</span>
                    <span className={styles.value}>{order.orderType}</span>
                </li>
                <li>
                    <span className={styles.field}>WMS Order Number</span>
                    <span className={styles.value}>{order.wmsOrderNumber}</span>
                </li>
                <li>
                    <span className={styles.field}>External Order Number</span>
                    <span className={styles.value}>{order.externalOrderNumber}</span>
                </li>
                <li>
                    <span className={styles.field}>Reference Number</span>
                    <span className={styles.value}>{order.referenceNumber}</span>
                </li>
                <li>
                    <span className={styles.field}>Order Origin</span>
                    <span className={styles.value}>{order.orderOrigin}</span>
                </li>
                <li>
                    <span className={styles.field}>Order Attribute</span>
                    <span className={styles.value}>{order.attributes.qimenOrderSource}</span>
                </li>
            </ul>
        </Card>
    )
}

export default OthersInfo