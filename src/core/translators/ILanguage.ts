import type { AstNodo } from '../types';

export interface ILanguage {
  translate(blocks: AstNodo[]): string;
}