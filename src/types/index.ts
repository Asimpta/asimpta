export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Deliverable {
  id: string;
  number: string;
  title: string;
  description: string;
  wide?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface Differential {
  id: string;
  mark: string;
  title: string;
  description: string;
}

export interface SelectOption {
  value: string;
  label: string;
  hint: string;
  token: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  testId: string;
}

export interface Stat {
  id: string;
  value: string;
  suffix?: string;
  label: string;
}
