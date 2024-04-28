import { lusitana } from "@/app/ui/font";
import SellBike from "@/app/ui/sell-bike/sell";

export default async function Page() {
  return (
    <main className="shadow-custom p-10 rounded-xl">
      <h1
        className={`${lusitana.className} mb-4 font-semibold text-blue-500 text-center text-xl md:text-2xl`}
      >
        Sell Bike
      </h1>
      <SellBike />
    </main>
  );
}
