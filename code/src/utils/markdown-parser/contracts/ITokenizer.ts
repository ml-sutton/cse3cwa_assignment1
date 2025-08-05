import { Token } from "../models/token";

export interface ITokenizer {
  tokenize: (untokenized_input: string) => Token[]
}
