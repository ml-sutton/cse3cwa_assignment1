import { ASTNode } from "./models/ASTNode";
import { IParser } from "./contracts/IParser";
import { ParsingRule } from "./models/ParsingRule";
import { Token } from "./models/token";

export class Parser implements IParser {
  constructor(
    public rules: ParsingRule[] = []
  ) {

  }
  parse(tokens: Token[]) {
    return { type: "root", children: [] }
  }

}
