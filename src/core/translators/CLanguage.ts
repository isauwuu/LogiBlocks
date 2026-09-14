import type { AstNodo } from '../types';
import type { ILanguage } from './ILanguage';

export class CLanguage implements ILanguage {
  translate(_blocks: AstNodo[]): string {
    return "";
  }
}