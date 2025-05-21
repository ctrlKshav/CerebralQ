import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";


export type Feature = {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: ForwardRefExoticComponent<LucideProps>;
  color: string;
  textColor: string;
  borderColor: string;
};