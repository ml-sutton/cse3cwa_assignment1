import { Token } from "../../token";
import { TokenRule } from "../../TokenRule";

export class ListTokenRule implements TokenRule
{
  match(line: string): boolean {
    return /^[-*+]\s+/.test(line);
  }

  createToken(line: string): Token {
    return {
      type: "list-item",
      content: line.replace(/^[-*+]\s+/, "")
    };
  }
}
