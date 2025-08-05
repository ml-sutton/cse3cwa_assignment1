import { ITokenizer } from "./contracts/ITokenizer";
import { Token } from "./models/token";
import { TokenRule } from "./models/TokenRule";

export class Tokenizer implements ITokenizer {
  constructor(public tokenRules: TokenRule[]) {

  }
  tokenize(untokenized_input: string): Token[] {
    const lines = untokenized_input.split(/\r?\n/);
    const tokens: Token[] = [];

    for (const line of lines) {
      for (const rule of this.tokenRules) {
        if (rule.match(line)) {
          tokens.push(rule.createToken(line));
          break;
        }
      }
    }

    return tokens;
  }
}
