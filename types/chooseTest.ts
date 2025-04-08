export interface TestFeature {
  icon: string;
  iconBgClass: string;
  text: string;
  tooltip: string;
}

export interface TestAvatar {
  initial: string;
}

export interface TestInfo {
  id: string;
  title: string;
  description: string;
  path: string;
  badge: string;
  badgeClass: string;
  icon: string;
  gradientClass: string;
  textColorClass: string;
  backgroundPattern: string;
  testDuration: string;
  traitCount: string;  
  features: TestFeature[];
  avatars: TestAvatar[];
  testsTaken: string;
}
