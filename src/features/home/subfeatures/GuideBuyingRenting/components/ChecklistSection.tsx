'use client';

import { useState } from "react";
import { Key, Home, CheckCircle } from "lucide-react";
import { alquilerChecklist, compraChecklist, redFlagsAlquiler, redFlagsCompra } from "@/src/features/home/subfeatures/GuideBuyingRenting/constants";
import { RedFlagsSection } from "./RedFlagsSection";

export function ChecklistSection() {
  const [activeTab, setActiveTab] = useState<"alquiler" | "compra">("alquiler");

  const currentChecklist = activeTab === "alquiler" ? alquilerChecklist : compraChecklist;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white shadow-lg p-1">
            <button
              onClick={() => setActiveTab("alquiler")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${activeTab === "alquiler"
                  ? "bg-slate-800 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center space-x-2">
                <Key className="w-5 h-5" />
                <span>Guía de Alquiler</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("compra")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${activeTab === "compra"
                  ? "bg-slate-800 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Guía de Compra</span>
              </div>
            </button>
          </div>
        </div>

        <h2 className="text-heading-2">
          Lista de Verificación - {activeTab === "alquiler" ? "Alquiler" : "Compra"}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Sigue esta guía paso a paso para realizar una transacción segura y exitosa
        </p>

        <div className="space-y-6">
          {currentChecklist.map((section, index) => {
            const Icon = section.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      {section.category}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed text-justify">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <RedFlagsSection currentRedFlags={activeTab === 'alquiler' ? redFlagsAlquiler : redFlagsCompra} />
    </>
  );
}
