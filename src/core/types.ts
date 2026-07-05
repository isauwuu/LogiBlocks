import { Node, Edge } from '@xyflow/react';

// ============================================================================
// 1. MUNDO AST SEMÁNTICO
// ============================================================================
type TipoAstBloque = "input"|"output"|"while"|"for"|"assign"|"if"|"expr"|"var"|"lit";

interface AstNodeBase {
  id: string;
  tipo: TipoAstBloque;
}
//1.2. Declaracion de todos los nodos de forma individual
export type AstInputNode = AstNodeBase & {
  variable: string;
}

export type AstOutputNode = AstNodeBase & {
  salida: string;
}

export type AstAssignNode= AstNodeBase & {
  variable: string;
  expresion: string;
}

export type AstWhileNode = AstNodeBase & {
  condicion: string;
  cuerpo: AstNodo[];
}
export type AstForNode = AstNodeBase & {
  indice: string;
  inicio: string;
  paso: number;
  fin: string;
  cuerpo: AstNodo[];
}

export type AstIfNode = AstNodeBase & {
  condicion: string;
  verdadero: AstNodo[];
  falso?: AstNodo[];
}
/* Esta parte se hara mas adelante para validar las expresiones dentro de los bloques, ahora usaremos la expresion tal cual entra
type AstExprNode = AstNodeBase & {
  operando1 : AstNodoExpresion;
  operando2 : AstNodoExpresion;
  operador : '+' | '-' | '*' | '/' | '<>' | '==' | '<' | '>';
}
type AstVarNode = AstNodeBase & {
  variable: string;
}
type AstLitNode = AstNodeBase & {
  valor: string | number;
}
*/
//1.3. Union para el evaluado de expresiones
// export type NodoExpresion = ExprNode | VarNode | LitNode;

//1.4. Union para el armado del AST
export type AstNodo = AstInputNode | AstOutputNode | AstAssignNode | AstWhileNode | AstForNode | AstIfNode;



// ============================================================================
// 2. MUNDO VISUAL / CANVAS
// ============================================================================

export type VisualBlockNode = Node & {
  id: string;
  tipo: TipoAstBloque;
  variable?: string;      //para entradas o asignaciones
  salida?: string;        //expresiones de salidas
  expresionStr?: string;  //expresiones en asignaciones
  condicionStr?: string;  //condiciones en if y while

  //campos para el for

  indice?: string;
  inicioStr?: string;
  finStr?: string;
  pasoStr?: string;
};

export interface VisualDiagramData {
  nodes: VisualBlockNode[];
  edges: Edge[];
}