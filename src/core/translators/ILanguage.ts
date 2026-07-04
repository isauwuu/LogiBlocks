import type { Nodo } from '../types';

export interface ILanguage {
  translate(blocks: Nodo[]): string;
}