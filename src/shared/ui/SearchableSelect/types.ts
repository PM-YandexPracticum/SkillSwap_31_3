import { TColors } from '../types';

export interface ISearchableSelect {
  values: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  selectedColor?: TColors;
}
