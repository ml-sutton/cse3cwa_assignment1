import { ASTNode } from "../../ASTNode";
import { ParsingRule } from "../../ParsingRule";
import { Token } from "../../token";

export class HeadingParsingRule implements ParsingRule {
  match(tokens: Token[]): boolean {
    return tokens[0].type === "heading";
  }

  createNode(tokens: Token[]): ASTNode {
    return {
      type: "heading",
      value: tokens[0].content,
      level: tokens[0].level
    };
  }
}
