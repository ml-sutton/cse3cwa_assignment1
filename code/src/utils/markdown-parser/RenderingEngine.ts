import { ASTNode } from "./models/ASTNode";
import { IRenderingEngine } from "./contracts/IRenderingEngine";
import { RenderingRule } from "./models/RenderingRule";

export class RenderingEngine implements IRenderingEngine {
  constructor(public renderingRules: RenderingRule[] = []) {

  }
  render(abstractSyntaxTree: ASTNode): string {
    if (!abstractSyntaxTree.children) return "";
    return abstractSyntaxTree.children.map(child => {
      for (const rule of this.renderingRules) {
        if (rule.match(child)) {
          return rule.render(child);
        }
      }
      return "";
    }).join("\n");
  }
}
