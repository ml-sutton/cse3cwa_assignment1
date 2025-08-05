import { Token } from "../../token";
import { TokenRule } from "../../TokenRule";

export class LinkTokenRule implements TokenRule {
  match(line: string): boolean {
    return /\[.+?\]\(.+?\)/.test(line);
  }
  createToken(line: string): Token {
    const match = /\[(.+?)\]\((.+?)\)/.exec(line);
    if (!match) return { type: "text", content: line };
    return {
      type: "link",
      content: match[1],
      href: match[2]
    };
  }

}
