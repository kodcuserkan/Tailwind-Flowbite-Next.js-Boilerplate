type flagSize = 'sm' | 'lg';

type FlagCode = 'en' | 'de' | 'it' | 'cn';

interface FlagProps {
  size?: flagSize;
}

export type {FlagProps, FlagCode, flagSize};