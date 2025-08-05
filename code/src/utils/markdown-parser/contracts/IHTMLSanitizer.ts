export interface IHTMLSanitizer {
  sanitize: (unsanitizedHTML: string) => string
}
