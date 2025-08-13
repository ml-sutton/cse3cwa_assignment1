import { ASTNode } from "../../ASTNode";
import { RenderingRule } from "../../RenderingRule";

export class ListRenderingRule implements RenderingRule {
  match(node: ASTNode): boolean {
    return node.type === "list";
  }

  render(node: ASTNode): string {
    const items = node.children?.map(child => `<li>${child.value}</li>`).join("") || "";
    return `<ul>${items}</ul>`;
  }
}
