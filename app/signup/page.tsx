import { Metadata } from "next";
import AcmeLogo from "../ui/acme-logo";
import Signupform from "../ui/signup-form";


export const metadata: Metadata = {
    title: 'Signup',
}

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center py-10">
            <div className="relative mx-auto shadow-custom rounded-xl flex w-full max-w-[60%] flex-col space-y-2.5 p-4">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <Signupform />
            </div>
        </main>
    )
}