import React from 'react'
import { Breadcrumb, Button } from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import styles from './BreadcrumbWrapper.module.scss'


const BreadcrumbWrapper = ({ orderId }) => {
    return (
        <div className={styles.container}>
            <Button className={styles.button} icon={<ArrowLeftOutlined />}></Button>
            <div className={styles['breadcrumb-container']} >
                <Breadcrumb
                    className={styles.breadcrumb}
                    items={[
                        {
                            title: 'Order',
                        },
                        {
                            title: 'Order details',
                        }
                    ]}
                />
                <span className={styles.id}>Order# {orderId}</span>
            </div>

        </div>
    )
}

export default BreadcrumbWrapper