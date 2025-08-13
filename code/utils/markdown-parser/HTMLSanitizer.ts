import { IHTMLSanitizer } from "./contracts/IHTMLSanitizer";

export class HTMLSanitizer implements IHTMLSanitizer {
  constructor() {

  }
  sanitize(unsanitizedHTML: string) {
    const sanitizedHTML = unsanitizedHTML.
      replace(/<\s*script[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, "")
      .replace(/<\s*style[^>]*>[\s\S]*?<\s*\/\s*style\s*>/gi, "")
      .replace(/on\w+\s*=\s*"[^"]*"/gi, "")
      .replace(/on\w+\s*=\s*'[^']*'/gi, "")
      .replace(/on\w+\s*=\s*[^\s>]+/gi, "")
    return sanitizedHTML;
  }

}
