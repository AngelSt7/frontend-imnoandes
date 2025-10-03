import { HomeIcon, Key } from "lucide-react";

export function ProcessTimeline() {
  return (
      <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-heading-2">
            Proceso Recomendado Paso a Paso
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Compara los pasos necesarios para cada tipo de transacción
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-kashmir-blue-600 to-kashmir-blue-700 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Proceso de Alquiler</h3>
                    <p className="text-kashmir-blue-100">7 pasos esenciales</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Búsqueda y Contacto', desc: 'Explora propiedades en ImnoAndes, filtra por tus necesidades y contacta a los propietarios verificados.' },
                    { step: '2', title: 'Verificación Inicial', desc: 'Confirma que el usuario esté verificado, revisa sus calificaciones y solicita información básica sobre la propiedad.' },
                    { step: '3', title: 'Visita Presencial', desc: 'Agenda una cita para conocer personalmente el inmueble. Lleva a alguien de confianza y visita en horario diurno.' },
                    { step: '4', title: 'Revisión de Documentos', desc: 'Solicita partida registral, documentos de identidad del propietario y revisa el contrato de arrendamiento detenidamente.' },
                    { step: '5', title: 'Negociación', desc: 'Acuerda términos claros: monto, fecha de pago, servicios incluidos, duración del contrato y condiciones especiales.' },
                    { step: '6', title: 'Firma de Contrato', desc: 'Firma el contrato de arrendamiento. Considera legalizarlo ante notario para mayor seguridad legal.' },
                    { step: '7', title: 'Pago y Entrega', desc: 'Realiza el pago del primer mes y garantía mediante transferencia rastreable. Solicita recibo y realiza el inventario de entrega.' }
                  ].map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-start space-x-3 mb-2">
                        <div className="w-8 h-8 bg-kashmir-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-gray-900 pt-1 font-poppins">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify ml-11">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-eggplant-500 to-eggplant-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <HomeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Proceso de Compra</h3>
                    <p className="text-eggplant-100">9 pasos esenciales</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Búsqueda y Selección', desc: 'Encuentra propiedades que se ajusten a tu presupuesto y necesidades. Compara precios y ubicaciones.' },
                    { step: '2', title: 'Contacto y Visita', desc: 'Contacta al vendedor verificado y agenda visitas. Visita varias veces en diferentes horarios.' },
                    { step: '3', title: 'Due Diligence Legal', desc: 'Contrata un abogado especializado. Solicita partida registral, certificados y verifica que no existan cargas.' },
                    { step: '4', title: 'Inspección Técnica', desc: 'Contrata un ingeniero o arquitecto para evaluar estructura, instalaciones y estado general de la construcción.' },
                    { step: '5', title: 'Valorización', desc: 'Considera contratar un tasador profesional para confirmar que el precio es justo según el mercado.' },
                    { step: '6', title: 'Negociación y Arras', desc: 'Negocia el precio final. Firma contrato de arras y entrega una señal (usualmente 10% del valor).' },
                    { step: '7', title: 'Financiamiento', desc: 'Si necesitas crédito hipotecario, presenta documentación al banco y espera la aprobación y desembolso.' },
                    { step: '8', title: 'Minuta y Escritura', desc: 'Firma la minuta de compraventa ante notario. Luego eleva a escritura pública.' },
                    { step: '9', title: 'Registro e Inscripción', desc: 'Inscribe la propiedad a tu nombre en Registros Públicos. Guarda todos los documentos legales.' }
                  ].map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-start space-x-3 mb-2">
                        <div className="w-8 h-8 bg-eggplant-300 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-gray-900 pt-1 font-poppins">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify ml-11">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  )
}
