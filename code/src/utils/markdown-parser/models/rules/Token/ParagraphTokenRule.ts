import { Token } from "../../token";
import { TokenRule } from "../../TokenRule";

export class ParagraphTokenRule implements TokenRule {
  match(line: string): boolean {
    return line.trim().length > 0;
  }

  createToken(line: string): Token {
    return { type: "paragraph", content: line };
  }
}
