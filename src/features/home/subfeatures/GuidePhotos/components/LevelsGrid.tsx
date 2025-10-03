import { levels } from "../constants";

export function NivelesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      {levels.map((nivel) => (
        <div
          key={nivel.title}
          className="bg-slate-50 rounded-lg p-6"
        >
          <h4 className="font-bold text-lg text-gray-900 mb-3 font-poppins">{nivel.title}</h4>
          <ul className="space-y-2 text-gray-700">
            {nivel.items.map((item, i) => (
              <li key={i} className="text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
