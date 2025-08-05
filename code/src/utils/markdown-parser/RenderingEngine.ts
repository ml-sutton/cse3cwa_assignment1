import { ASTNode } from "./models/ASTNode";
import { IRenderingEngine } from "./contracts/IRenderingEngine";
import { RenderingRule } from "./models/RenderingRule";

export class RenderingEngine implements IRenderingEngine {
  constructor(public renderingRules: RenderingRule[] = []) {

  }
  render(abstractSyntaxTree: ASTNode): string {
    return ""
  }
}
