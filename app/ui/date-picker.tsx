'use client'

import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, theme } from 'antd';
import type { Dayjs } from 'dayjs';

const PickDate: React.FC = () => {
  const cellRender: DatePickerProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number' || typeof current === 'string') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" >
        {current.date()}
      </div>
    );
  };
  return (
    <Space size={12} direction="vertical">
      <DatePicker cellRender={cellRender} />
    </Space>
  );
};

export default PickDate;