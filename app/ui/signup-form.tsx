"use client";

import {
  ArrowRightIcon,
  AtSymbolIcon,
  KeyIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./button";
import { lusitana } from "./font";
import { useFormStatus } from "react-dom";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { Select } from "antd";

export default function Signupform() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <form action="" className="space-y-5">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-black`}>
          Please create an account to continue.
        </h1>
        <div className="w-full">
          <div className="flex gap-5">
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 "
                htmlFor="email"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="phone"
              >
                Contact Number
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  min={"1"}
                  required
                />
                <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="phone"
              >
                Gender
              </label>
              <div className="relative">
                <Select
                  placeholder='Choose gender'
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Prefer", label: "Prefer not to say" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="username"
              >
                Username
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="w-full">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <SignupButton />
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
