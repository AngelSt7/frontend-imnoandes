import { LucideIcon } from "lucide-react";

export interface OptionSEO {
  key: string;  
  icon: LucideIcon;  
  label: string;     
  slug: string;  
}

export interface SEOProps {
  tittle?: string;
  regex: RegExp;
  mode: "single" | "multiple";
  joiner?: string;
  options: OptionSEO[];
  prefix: string;
  inProvider?: boolean
  onChange?: () => void
}
