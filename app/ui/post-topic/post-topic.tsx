import { Input } from "antd";
import { lusitana } from "../font";
import UploadImage from "../upload";
import TextArea from "antd/es/input/TextArea";
import { Button } from "../button";

export default function POstTopic() {
  return (
    <form className={`${lusitana.className} grid gap-5`}>
      <div className="flex gap-5 w-full">
        <label className="min-w-[100px] text-xl">Topic Id</label>
        <Input placeholder="Enter the topic id" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[100px] text-xl">Topic</label>
        <Input placeholder="Enter topic" type="text" required />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[100px]  text-xl">Image</label>
        <UploadImage />
      </div>
      <div className="flex gap-5 w-full">
        <label className="min-w-[100px] text-xl">Description</label>
        <TextArea placeholder="Enter topic" required />
      </div>
      <Button className="w-max" type="submit">
        Submit
      </Button>
    </form>
  );
}
