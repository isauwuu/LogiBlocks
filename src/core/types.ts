import { Node, Edge } from '@xyflow/react';

//1. Declaracion de la estructura base de un nodo
type TipoBloque = "input"|"output"|"while"|"for"|"assign"|"if"|"expr"|"var"|"lit";

interface NodeBase {
  id: string;
  tipo: TipoBloque;
}
//2. Declaracion de todos los nodos de forma individual
type InputNode = NodeBase & {
  variable: string;
}

type OutputNode = NodeBase & {
  salida: string;
}

type AssignNode= NodeBase & {
  variable: string;
  expresion: string;
}

type WhileNode = NodeBase & {
  condicion: string;
  cuerpo: Nodo[];
}
type ForNode = NodeBase & {
  indice: string;
  inicio: string;
  paso: number;
  fin: string;
  cuerpo: Nodo[];
}

type IfNode = NodeBase & {
  condicion: string;
  verdadero: Nodo[];
  falso?: Nodo[];
}
/* Esta parte se hara mas adelante para validar las expresiones dentro de los bloques, ahora usaremos la expresion tal cual entra
type ExprNode = NodeBase & {
  operando1 : NodoExpresion;
  operando2 : NodoExpresion;
  operador : '+' | '-' | '*' | '/' | '<>' | '==' | '<' | '>';
}
type VarNode = NodeBase & {
  variable: string;
}
type LitNode = NodeBase & {
  valor: string | number;
}
*/
//3. Union para el evaluado de expresiones
// export type NodoExpresion = ExprNode | VarNode | LitNode;

//4. Union para el armado del AST
export type Nodo = InputNode | OutputNode | AssignNode | WhileNode | ForNode | IfNode; //| NodoExpresion;


//5. Acople con React Flow
export type CustomNodo = Node & Nodo;
export type CustomEdge = Edge;

export interface ProjectData {
  nodes : CustomNodo[];
  edges : CustomEdge[];
}