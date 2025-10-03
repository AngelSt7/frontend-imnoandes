"use client"

import { Link } from "@heroui/react";
import { buttons } from "./constants";

export function NavigationCard() {

  return (
    <section className="mt-6 xs:mt-12 space-y-4">
      <h2 className="text-h2 font-poppins">Listados de inmuebles que te pueden interesar</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 lg:grid-cols-4">
        {buttons.map((button) => (
          <Link
            key={button.label}
            href={button.route}
            target="_blank"
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm transition-all group hover:shadow-md flex items-center justify-between"
            aria-label={button.label}
          >
            <div className="flex items-center gap-3">
              <div
                className="bg-gray-50 p-2 rounded-lg transition-colors group-hover:bg-gray-100"
                aria-hidden="true"
              >
                {button.icon}
              </div>
              <header>
                <h3
                  className={`text-gray-900 font-medium text-sm transition-colors group-${button.hoverColor}`}
                >
                  {button.label}
                </h3>
              </header>
            </div>

            <div
              className={`text-gray-400 transition-all inline-flex items-center group-${button.hoverColor} group-hover:translate-x-1`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
