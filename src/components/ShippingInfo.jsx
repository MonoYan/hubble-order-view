import React, { useState } from 'react';
import { Card, Modal, Tag, Tooltip } from 'antd';
import { formatDate } from '../utils';
import { SyncOutlined } from '@ant-design/icons';
import styles from './CommonInfo.module.scss';
import { carrierLogoMap } from '../utils';

const ShippingInfo = ({ shippingUnits, carrier }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const carrierLogoSrc = carrierLogoMap[carrier.name];

  const showModal = (url) => {
    setLoading(true);
    // 模拟 API 调用
    console.log(`Calling API: ${url}`);
    // 假设 url 直接就是地图的 iframe URL
    setMapUrl(url);
    setIsModalVisible(true);
    setLoading(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card title="Shipping Information" className={styles.container}>
      {shippingUnits.map((unit) => (
        <ul key={unit.id}>
          <li>
            <span className={styles.field}>Status</span>
            <span className={styles.value}>
              <Tooltip title={unit.shippingUnitStatus.description}>
                <Tag icon={<SyncOutlined spin />} bordered={false} color="processing">
                  {unit.shippingUnitStatus.name}
                </Tag>
              </Tooltip>
            </span>
          </li>
          <li>
            <span className={styles.field}>Track Package</span>
            <span className={styles.value}>
              <a onClick={() => showModal(unit.shippingTrackingUrl)}>🚚 Click here to track</a>
            </span>
          </li>
          <li>
            <span className={styles.field}>Shipping Date</span>
            <span className={styles.value}>{formatDate(unit.shipment.createdAt)}</span>
          </li>
          <li>
            <span className={styles.field}>Carrier</span>
            <span className={styles.value}>
              <img src={carrierLogoSrc} alt="carrierLogo" className={styles.logo} />
            </span>
          </li>
          <li>
            <span className={styles.field}>Tracking Number</span>
            <span className={styles.value}>{unit.shippingTrackingNumber}</span>
          </li>
          <li>
            <span className={styles.field}>Shipment Number</span>
            <span className={styles.value}>{unit.shipment.shipmentNumber}</span>
          </li>
          <li>
            <span className={styles.field}>Unit Number</span>
            <span className={styles.value}>{unit.shippingUnitNumber}</span>
          </li>
        </ul>
      ))}

      <Modal
        title="Shipping Tracking Detail"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
        loading={loading} 
        loadingText="Loading map..." 
      >
        <iframe
          title="Shipping Tracking Map"
          src={mapUrl}
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </Modal>
    </Card>
  );
};

export default ShippingInfo;