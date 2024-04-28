import { Input } from "antd";
import { lusitana } from "../font";
import PickDate from "../date-picker";
import { Button } from "../button";
import PickTime from "../time-picker";

export default function RegisterService() {
  return (
    <form className={`${lusitana.className} grid gap-5`}>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Transaction Id</label>
        <Input placeholder="Enter the transaction id" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Date</label>
        <PickDate />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Time</label>
        <PickTime />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Brand Name</label>
        <Input placeholder="Enter brand name" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Model Number</label>
        <Input placeholder="Enter model number" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Registration Number</label>
        <Input placeholder="Enter registration number" type="text" required />
      </div>
      <Button className="w-max" type="submit">
        Submit
      </Button>
    </form>
  );
}
