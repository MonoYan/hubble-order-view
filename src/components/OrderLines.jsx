import React from 'react';
import { Table, Descriptions, Typography, Empty, Row, Col } from 'antd';
const { Text } = Typography;

const formatCurrency = (amount, currency = 'RMB') => {
  return `${amount.toFixed(2)} ${currency}`;
};

const columns = [
  {
    title: 'Item Name',
    dataIndex: ['variant', 'name'],
    key: 'name',
    ellipsis: true,
  },
  {
    title: 'SKU',
    dataIndex: ['variant', 'sku'],
    key: 'sku',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    render: (price) => formatCurrency(price),
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (amount) => formatCurrency(amount),
  },
];

const OrderLines = ({ salesOrderLineItems }) => {
  if (!salesOrderLineItems || salesOrderLineItems.length === 0) {
    return <Empty description="No order lines found" />;
  }

  const totalQuantity = salesOrderLineItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = salesOrderLineItems.reduce((acc, item) => acc + item.totalAmount, 0);

  const expandedRowRender = (record) => (
    <Descriptions column={2} bordered>
      <Descriptions.Item label="EAN">{record.variant.ean}</Descriptions.Item>
      <Descriptions.Item label="Dimensions">
        {`${record.variant.length}x${record.variant.width}x${record.variant.height} ${record.variant.metricUnit}`}
      </Descriptions.Item>
      <Descriptions.Item label="Weight">
        {`${record.variant.grossWeight} ${record.variant.weightUnit}`}
      </Descriptions.Item>
    </Descriptions>
  );

  return (
    <div className="order-lines">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Table
            columns={columns}
            dataSource={salesOrderLineItems}
            rowKey="id"
            pagination={false}
            expandable={{ expandedRowRender }}
            footer={() => (
              <>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Text strong>Total Quantity: {totalQuantity}</Text>
                  <Text strong>Total Amount: {formatCurrency(totalAmount)}</Text>
                </div>
              </>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OrderLines;