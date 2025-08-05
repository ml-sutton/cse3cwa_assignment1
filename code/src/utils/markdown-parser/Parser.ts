import { ASTNode } from "./models/ASTNode";
import { IParser } from "./contracts/IParser";
import { ParsingRule } from "./models/ParsingRule";
import { Token } from "./models/token";

export class Parser implements IParser {
  constructor(
    public parsingRules: ParsingRule[] = []
  ) {

  }
  parse(tokens: Token[]) {
    const children: ASTNode[] = [];
    for (const token of tokens) {
      for (const rule of this.parsingRules) {
        if (rule.match([token])) {
          children.push(rule.createNode([token]));
          break;
        }
      }
    }
    return { type: "root", children };
  }
}


