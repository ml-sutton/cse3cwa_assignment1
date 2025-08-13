import { ASTNode } from "../../ASTNode";
import { ParsingRule } from "../../ParsingRule";
import { Token } from "../../token";

export class ListParsingRule implements ParsingRule {
  match(tokens: Token[]): boolean {
    return tokens.length > 0 && tokens[0].type === "list-item";
  }

  createNode(tokens: Token[]): ASTNode {
    const children: ASTNode[] = [];
    let i = 0;
    while (i < tokens.length && tokens[i].type === "list-item") {
      children.push({
        type: "list-item",
        value: tokens[i].content
      });
      i++;
    }
    // Remove processed tokens
    tokens.splice(0, i);
    return {
      type: "list",
      children
    };
  }
}
