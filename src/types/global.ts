export interface ReactComponetProps {
  children?: JSX.Element | JSX.Element[];
  t?: Function;
}

export interface ExperienceProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

export interface AcademicProps {
  title: string;
  institute: string;
  year: string;
  link?: string;
}

export interface LanguageProps {
  language: string;
  level: string;
}
