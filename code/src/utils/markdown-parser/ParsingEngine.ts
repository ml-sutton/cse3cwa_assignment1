import { IParsingEngine } from "./contracts/IParsingEngine";
import { HTMLSanitizer } from "./HTMLSanitizer";
import { Parser } from "./Parser";
import { RenderingEngine } from "./RenderingEngine";
import { Tokenizer } from "./Tokenizer";

export class ParsingEngine implements IParsingEngine {
  constructor(
    public parser: Parser,
    public tokenizer: Tokenizer,
    public renderer: RenderingEngine,
    public sanitizer: HTMLSanitizer
  ) {
    console.log("starting Madi's markdown parser");
  }
  parse(markdown: string): string {
    const tokens = this.tokenizer.tokenize(markdown);
    const abstractSyntaxTree = this.parser.parse(tokens);
    const unsanitizedHTML = this.renderer.render(abstractSyntaxTree);
    const sanitizedHTML = this.sanitizer.sanitize(unsanitizedHTML)

    return sanitizedHTML;
  }
}
