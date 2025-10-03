import { Tabs } from "../../constants";

interface ControlTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export function ControlTabs({ activeTab, setActiveTab }: ControlTabsProps) {
  return (
    <div className="w-full flex justify-center">
        <div className="neumorphic-tabs w-fit rounded-lg">
          <div className="flex">
            {Tabs.map((tab) => (
              <button
                key={tab.key}
                className={`${tab.rounded} px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.key
                    ? 'text-emerald-600 border-emerald-500 bg-emerald-50/50' 
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}