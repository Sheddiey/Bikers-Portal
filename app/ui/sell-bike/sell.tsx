import { Input } from "antd";
import { lusitana } from "../font";
import UploadImage from "../upload";
import { Button } from "../button";

export default function SellBike() {
  return (
    <form className={`${lusitana.className} grid gap-5`}>
      <div className="flex gap-5 w-full">
        <label className="min-w-[100px]  text-xl">Image</label>
        <UploadImage />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[150px] text-xl">Company Name</label>
        <Input placeholder="Enter Company Name" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[150px] text-xl">Model Name</label>
        <Input placeholder="Enter Model Name" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[150px] text-xl">Model Number</label>
        <Input placeholder="Enter Model Number" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[150px] text-xl">Model year</label>
        <Input placeholder="Enter Model Year" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[150px] text-xl">Selli Price</label>
        <Input placeholder="Enter Selling Price" type="text" required />
      </div>
      <Button className="w-max" type="submit">
        Submit
      </Button>
    </form>
  );
}
