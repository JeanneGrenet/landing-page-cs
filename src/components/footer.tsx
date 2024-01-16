import Link from "next/link";
import Icon from "next/image";
import linkedin from "../assets/images/linkedinIcon.svg";

export default function FooterSection() {
  return (
    <footer className="bg-white py-6">
      <article className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <section className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://www.linkedin.com/company/camelstudio/"
            className="text-gray-400"
          >
            <Icon
              className="h-6 w-6 text-primary"
              src={linkedin}
              alt="logo linkedin"
            />
          </Link>
        </section>
        <section className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-primary">
            &copy; 2024 Camel Studio, Inc. All rights reserved.
          </p>
        </section>
      </article>
    </footer>
  );
}
