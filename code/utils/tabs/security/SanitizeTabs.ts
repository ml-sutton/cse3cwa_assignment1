import { Tab } from "../models/tab";

const escapeHTML = (str: string) => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;",
    "=": "&#61;",
    "/": "&#47;"
  };
  return str.replace(/[&<>"'`=\/]/g, (ch) => map[ch]);
}
export default function SanitizeTabs(tabs: Tab[]): Tab[] {
  const escapedTabs: Tab[] = tabs.map((tab) => {
    const sanitizedData = escapeHTML(tab.tabBody);
    const newTab: Tab = {
      tabId: tab.tabId,
      tabName: tab.tabName,
      tabBody: sanitizedData,
      syntaxHighlight: tab.syntaxHighlight
    };
    return newTab
  })
  return escapedTabs
}
