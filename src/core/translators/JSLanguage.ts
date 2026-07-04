import type * as T from '../types';
import type { ILanguage } from './ILanguage';

export class JSLanguage implements ILanguage {


  translate(Ast: T.Nodo[]): string {
    let codigo: string = "";

    for(const nodo of Ast){

      switch(nodo.tipo){

        case "input":
          const nodoInput = nodo as T.InputNode;
          codigo += `let ${nodoInput.variable} = prompt("Ingrese ${nodoInput.variable}:");\n`;
          break;

        default:
          break;
     }
    }
    return codigo;
  }



}