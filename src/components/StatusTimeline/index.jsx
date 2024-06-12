import React from 'react';
import { Timeline, Tooltip } from 'antd';
import { formatDate } from '../../utils';
import styles from './StatusTimeline.module.scss';

const StatusTimeline = ({ events }) => {
  const timelineItems = events.map((event) => ({
    children: (
      <Tooltip title={event.fulfillmentStatus.description}>
        <div className={styles['timeline-item']}>
          <span className={styles.status}>{event.fulfillmentStatus.name}</span>
          <span className={styles.date}>{formatDate(event.occurredAt)}</span>
        </div>
      </Tooltip>
    ),
    key: event.id,
  }));

  return (
    <Timeline
      className={styles.container}
      items={timelineItems}
    />
  );
};

export default StatusTimeline;