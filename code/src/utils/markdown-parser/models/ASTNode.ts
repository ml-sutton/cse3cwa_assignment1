export interface ASTNode {
  type: string;
  children?: ASTNode[];
  value?: string;
  level?: number;
  href?: string;
  [key: string]: any;
}
