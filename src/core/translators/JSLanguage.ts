import type { Nodo } from '../types';
import type { ILanguage } from './ILanguage';

export class JSLanguage implements ILanguage {


  translate(_blocks: Nodo[]): string {
    return "";
  }



}