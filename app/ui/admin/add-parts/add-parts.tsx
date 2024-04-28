import { Input } from "antd";
import { lusitana } from "../../font";
import UploadImage from "../../upload";
import TextArea from "antd/es/input/TextArea";
import { Button } from "../../button";

export default function AddParts() {
  return (
    <form className={`${lusitana.className} grid gap-5`}>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Product Id</label>
        <Input placeholder="Enter the product id" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Product Name</label>
        <Input placeholder="Enter the product name" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px]  text-xl">Select Image</label>
        <UploadImage />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Short Description</label>
        <TextArea placeholder="Enter a short description" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[180px] text-xl">Price</label>
        <Input placeholder="Enter price" type="text" required />
      </div>
      <Button className="w-max" type="submit">
        Submit
      </Button>
    </form>
  );
}
