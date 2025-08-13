export interface ASTNode {
  type: string;
  children?: ASTNode[];
  value?: string;
  level?: number;
  href?: string;
  // eslint-disable-next-line
  [key: string]: any; 
}
