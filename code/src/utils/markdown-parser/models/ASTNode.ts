export interface ASTNode {
  type: string;
  children?: ASTNode[];
  value?: string;
  level?: number;
  [key: string]: any;
}
