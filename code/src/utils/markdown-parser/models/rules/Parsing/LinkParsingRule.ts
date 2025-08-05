import { ASTNode } from "../../ASTNode";
import { ParsingRule } from "../../ParsingRule";
import { Token } from "../../token";

export class LinkParsingRule implements ParsingRule {
  match(tokens: Token[]): boolean {
    return tokens[0].type === "link";
  }

  createNode(tokens: Token[]): ASTNode {
    return {
      type: "link",
      value: tokens[0].content,
      href: tokens[0].href
    };
  }
}
