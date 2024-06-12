import React from 'react'
import { Card } from 'antd'
import styles from './CommonInfo.module.scss'

const CustomerInfo = ({ shipTo, warehouse }) => {
    return (
        <Card title="Destination & Origin" className={styles.container}>
            <ul >
                <li>
                    <span className={styles.title}>Shipping To</span>
                </li>
                <li>
                    <span className={styles.field}>Name</span>
                    <span className={styles.value}>{shipTo.name}</span>
                </li>
                <li>
                    <span className={styles.field}>Phone</span>
                    <span className={styles.value}>{shipTo.phone}</span>
                </li>
                <li>
                    <span className={styles.field}>Address</span>
                    <span className={styles.value}>{shipTo.shippingAddress}</span>
                </li>
                <li>
                    <span className={styles.title}>Shipped From</span>
                </li>
                <li>
                    <span className={styles.field}>Warehouse Name</span>
                    <span className={styles.value}>{warehouse.name}</span>
                </li>
                <li>
                    <span className={styles.field}>Warehouse Phone</span>
                    <span className={styles.value}>{warehouse.shippingPhone}</span>
                </li>
                <li>
                    <span className={styles.field}>Warehouse Address</span>
                    <span className={styles.value}>{warehouse.shippingAddress}</span>
                </li>
            </ul>
        </Card>
    )
}

export default CustomerInfo