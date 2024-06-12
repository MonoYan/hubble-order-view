import React, { useState, useEffect } from 'react';
import { Card, message, Space, Flex } from 'antd';
import { getOrder, updateOrder, cancelOrder, createReturn } from '../services/api';
import StatusTimeline from '../components/StatusTimeline/index';
import ShippingInfo from '../components/ShippingInfo';
import OrderLines from '../components/OrderLines';
import CommentsArea from '../components/CommentArea/index';
import BreadcrumbWrapper from '../components/BreadcrumbWrapper/index';
import OrderInfo from '../components/OrderInfo/index';
import CustomerInfo from '../components/CustomerInfo';
import OthersInfo from '../components/OthersInfo';

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  // Get Order Data
  useEffect(() => {
    getOrder(orderId).then((res) => setOrder(res.data));
  }, [orderId]);

  const handleUpdate = async () => {
    try {
      await updateOrder(orderId, { /* 更新的数据 */ });
      message.success('Order updated successfully');
    } catch (error) {
      message.error('Failed to update order');
    }
  };

  const handleCancel = async () => {
    try {
      await cancelOrder(orderId);
      message.success('Order cancelled successfully');
    } catch (error) {
      message.error('Failed to cancel order');
    }
  };

  const handleReturn = async () => {
    try {
      await createReturn(orderId);
      message.success('Return created successfully');
    } catch (error) {
      message.error('Failed to create return');
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <>
      <BreadcrumbWrapper orderId={orderId} />
      <Space direction="vertical" size='middle' style={{ display: 'flex' }}>

        {/* order */}
        <OrderInfo
          order={order}
          handleUpdate={handleUpdate}
          handleReturn={handleReturn}
          handleCancel={handleCancel}
        />

        {/* Order Status & Shipping Information & Destination & Origin */}
        <Flex gap="0 12px" wrap>
          <Card title="Order Status" style={{ flex: 1 }}>
            <StatusTimeline events={order.fulfillmentEvents} />
          </Card>
          <ShippingInfo shippingUnits={order.shippingUnits} carrier={order.carrier} />
          <CustomerInfo shipTo={order.shipTo} warehouse={order.warehouseLocation} />
        </Flex>

        {/* Items Ordered */}
        <Card title="Items Ordered">
          <OrderLines salesOrderLineItems={order.salesOrderLineItems} />
        </Card>


        <Flex>
          {/* Comments */}
          <div style={{ flex: 1 }}>
            <CommentsArea />
          </div>
          {/* OthersInfo */}
          <div style={{ width: '40%' }}>
            <OthersInfo order={order} />
          </div>
        </Flex>
      </Space>
    </>
  );
};

export default OrderDetails;