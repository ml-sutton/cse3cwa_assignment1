import { ITokenizer } from "./contracts/ITokenizer";
import { Token } from "./models/token";
import { TokenRule } from "./models/TokenRule";

export class Tokenizer implements ITokenizer {
  constructor(public tokenRules: TokenRule[]) {

  }
  tokenize(untokenized_input: string): Token[] {
    return [];
  }
}
