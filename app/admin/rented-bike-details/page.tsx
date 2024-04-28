import RentedBikeDetails from "@/app/ui/admin/rented-bikes";
import { lusitana } from "@/app/ui/font";

export default async function Page() {
  return (
    <main className="shadow-custom p-10 rounded-xl">
      <h1
        className={`${lusitana.className} mb-4 text-blue-500 font-semibold text-center text-xl md:text-2xl`}
      >
        Rented Bike Details
      </h1>
      <RentedBikeDetails />
    </main>
  );
}
