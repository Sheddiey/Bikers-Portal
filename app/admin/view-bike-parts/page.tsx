import ViewBikeParts from "@/app/ui/admin/view-bike-parts/view-bike-parts";
import { lusitana } from "@/app/ui/font";

export default async function Page() {
  return (
    <main className="shadow-custom p-10 rounded-xl">
      <h1
        className={`${lusitana.className} mb-4 text-blue-500 font-semibold text-center text-xl md:text-2xl`}
      >
        View Available Bike Parts
      </h1>
      <ViewBikeParts />
    </main>
  );
}
