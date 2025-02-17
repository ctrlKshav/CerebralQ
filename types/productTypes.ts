import { ReactNode } from "react";

export interface ProductInterface {
  id: string;
  name: string;
  icon: (className? : string) => ReactNode;
  description: string;
  themeColor?: string; 
  features: ProductFeatures;
  link?: string; 
  productType?: string;
  productStatus?: string;
  imageSrc?: string;
}

export interface ProductFeatures {
  title: string;
  items: string[];
}
