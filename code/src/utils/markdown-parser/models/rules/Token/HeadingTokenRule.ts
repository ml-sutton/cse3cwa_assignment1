import { Token } from "../../token";
import { TokenRule } from "../../TokenRule";

export class HeadingTokenRule implements TokenRule
{
  match(line: string): boolean {
    return /^#{1,6} /.test(line);
  }

  createToken(line: string): Token {
    const match = /^(#{1,6}) (.*)/.exec(line);
    if (!match) return { type: "text", content: line };
    return {
      type: "heading",
      level: match[1].length,
      content: match[2]
    };
  }
}
