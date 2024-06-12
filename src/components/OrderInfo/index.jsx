import React from 'react'
import { Button, Flex, Tag, Space } from 'antd';
import { RedoOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { formatDate } from '../../utils';
import styles from './OrderInfo.module.scss'

// 根据订单状态返回颜色
const getStatusColor = (status) => {
    switch (status) {
        case 'Pending':
            return '';
        case 'Processing':
        case 'Waved':
        case 'Picking':
        case 'Picked':
            return 'processing';
        case 'Fulfilled':
            return 'success';
        default:
            return '';
    }
};

const OrderInfo = ({
    order,
    handleUpdate,
    handleReturn,
    handleCancel
}) => {
    const statusColor = getStatusColor(order.fulfillmentStatus.name);

    return (
        <div className={styles.container}>
            <Space direction='vertical' size='middle'>
                <Flex gap="middle" justify='space-between'>
                    <Flex gap="small">
                        <span className={styles['order-id']}>Order# {order.orderNumber}</span>
                        <Tag className={styles['status-tag']} bordered={false} color={statusColor}>
                            {order.fulfillmentStatus.name}
                        </Tag>
                    </Flex>

                    <Flex gap="small" className={styles['button-container']}>
                        <Button onClick={handleUpdate} icon={<RedoOutlined />}>Update Order</Button>
                        <Button onClick={handleReturn} type='primary' icon={<PlusCircleOutlined />}>Create Return</Button>
                        <Button onClick={handleCancel} danger type="primary" icon={<CloseCircleOutlined />}>Cancel Order</Button>
                    </Flex>
                </Flex>

                <Flex gap="small">
                    <Tag className={styles['time-tag']} bordered={false} >
                        Channel: {order.channel.name}
                    </Tag>
                    <Tag className={styles['time-tag']} bordered={false}  >
                        CreatedAt: {formatDate(order.createdAt)}
                    </Tag>
                    <Tag className={styles['time-tag']} bordered={false}  >
                        ShippedAt: {formatDate(order.shippedAt)}
                    </Tag>
                    <Tag className={styles['time-tag']} bordered={false}  >
                        UpdateAt: {formatDate(order.updatedAt)}
                    </Tag>
                </Flex>
            </Space>
        </div>
    )
}

export default OrderInfo