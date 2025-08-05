export interface RenderingRule {
  match(node: Node): boolean;
  render(node: Node): string;
}
