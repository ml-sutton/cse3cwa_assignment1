import { HeadingParsingRule, HeadingRenderingRule, HeadingTokenRule, HTMLSanitizer, LinkParsingRule, LinkRenderingRule, LinkTokenRule, ListParsingRule, ListRenderingRule, ListTokenRule, ParagraphParsingRule, ParagraphRenderingRule, ParagraphTokenRule, Parser, ParsingEngine, ParsingRule, RenderingEngine, RenderingRule, Tokenizer, TokenRule } from "./FactoryImports"

export class ParsingEngineFactory {
  static build() {
    const tokenRules: TokenRule[] = [new HeadingTokenRule(), new ParagraphTokenRule(), new LinkTokenRule(), new ListTokenRule()];
    const parsingRules: ParsingRule[] = [new HeadingParsingRule(), new ParagraphParsingRule(), new LinkParsingRule(), new ListParsingRule()];
    const renderingRules: RenderingRule[] = [new HeadingRenderingRule(), new ParagraphRenderingRule(), new LinkRenderingRule(), new ListRenderingRule()];

    const tokenizer: Tokenizer = new Tokenizer(tokenRules);
    const parser: Parser = new Parser(parsingRules);
    const renderingEngine: RenderingEngine = new RenderingEngine(renderingRules);
    const sanitizer: HTMLSanitizer = new HTMLSanitizer();

    const parsingEngine: ParsingEngine = new ParsingEngine(tokenizer, parser, renderingEngine, sanitizer)


    return parsingEngine;
  }
}
