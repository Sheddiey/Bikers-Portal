import { Metadata } from "next";
import SideNav from "../ui/admin/sidenav";

export const metadata: Metadata = {
    title: {
        template: '%s | Bikers Portal',
        default: 'Admin',
      },
}

export default function Layout ({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}