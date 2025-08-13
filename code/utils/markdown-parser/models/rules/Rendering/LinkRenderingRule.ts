import { ASTNode } from "../../ASTNode";
import { RenderingRule } from "../../RenderingRule";

export class LinkRenderingRule implements RenderingRule {
  match(node: ASTNode): boolean {
    return node.type === "link";
  }

  render(node: ASTNode): string {
    return `<a href="${node.href}">${node.value}</a>`;
  }
}
