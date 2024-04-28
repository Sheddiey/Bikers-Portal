import { lusitana } from "@/app/ui/font";
import RegisterService from "@/app/ui/service-register/register";

export default async function Page() {
  return (
    <main className="p-10 rounded-xl shadow-custom">
      <h1
        className={`${lusitana.className} mb-4 text-center text-blue-500 font-semibold text-xl md:text-2xl`}
      >
        Service Register
      </h1>
      <RegisterService />
    </main>
  );
}
