import { Waves, Shield, Droplets, Lightbulb, Wifi, Car, Baby, ArrowUp, Dumbbell, Sparkles } from "lucide-react"

export const serviceIconMap: Record<string, any> = {
  'piscina': Waves,
  'seguridad-24h': Shield,
  'agua-potable': Droplets,
  'luz': Lightbulb,
  'internet': Wifi,
  'estacionamiento': Car,
  'parque-infantil': Baby,
  'ascensor': ArrowUp,
  'gimnasio': Dumbbell,
  'limpieza': Sparkles,
}
export const serviceColorMap: Record<string, string> = {
  'piscina': 'text-blue-500',
  'seguridad-24h': 'text-green-600',
  'agua-potable': 'text-cyan-500',
  'luz': 'text-yellow-500',
  'internet': 'text-purple-500',
  'estacionamiento': 'text-gray-600',
  'parque-infantil': 'text-pink-500',
  'ascensor': 'text-indigo-500',
  'gimnasio': 'text-red-500',
  'limpieza': 'text-emerald-500',
}
