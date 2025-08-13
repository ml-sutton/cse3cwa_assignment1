import { ASTNode } from "../../ASTNode";
import { ParsingRule } from "../../ParsingRule";
import { Token } from "../../token";

export class ParagraphParsingRule implements ParsingRule {
  match(tokens: Token[]): boolean {
    return tokens[0].type === "paragraph";
  }

  createNode(tokens: Token[]): ASTNode {
    return {
      type: "paragraph",
      value: tokens[0].content
    };
  }
}
