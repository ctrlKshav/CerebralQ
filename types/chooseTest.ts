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
  badges: {
    quality: string;
    testDuration: string;
    traitCount: string;
  }
  colorClass: string;
  icon: string;
  textColorClass: string;
  features: TestFeature[];
  avatars: TestAvatar[];
  testsTaken: string;
}
