import Icon from "next/image";
import logo from "../assets/images/logo.svg";
import barsIcon from "../assets/images/barsIcon.svg";
import xIcon from "../assets/images/xIcon.svg";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

const navigation = [
  { name: "Prestations", href: "#services" },
  { name: "Présentation", href: "#presentation" },
  { name: "Travailler avec nous !", href: "#work" },
];

export default function NavSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="mx-auto flex max-w-auto items-center p-4 lg:px-8 sticky z-10 top-0 bg-gray-50">
      <Link className="flex lg:flex-1" href="#hero">
        <Icon className="h-10 w-auto" src={logo} alt="logo of the company" />
      </Link>
      <nav className="ml-auto flex max-w-7xl p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Icon
              className="h-6 w-6"
              src={barsIcon}
              alt="open main menu icon"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Icon className="h-6 w-6" src={xIcon} alt="close menu icon" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
