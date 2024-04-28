import React from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";

const format = "HH:mm";

const PickTime: React.FC = () => (
  <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
);

export default PickTime;
