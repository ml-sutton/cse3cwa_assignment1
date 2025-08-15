import { Tab } from "../models/tab"

export default function ReadTabsFromLocalStorage(): Promise<Tab[] | null> {

  return new Promise((resolve, reject) => {
    try {
      if (typeof window === 'undefined') return;
      const size = window.localStorage.length;
      const keys = Array.from({ length: size }, (_, i) => localStorage.key(i)!).filter((value) => {
        if (value === null) return false;
        if (value.startsWith("TAB#")) return true;
        return false;
      })
      const tabs: Tab[] = []
      keys.forEach((key) => {
        const localStorageValue = window.localStorage.getItem(key);
        if (!localStorageValue) resolve(null);
        const notNullLocalStorageValue = localStorageValue as string
        const parsedValue = JSON.parse(notNullLocalStorageValue);

        const newTab: Tab = {
          tabId: parsedValue.tabId,
          tabName: parsedValue.tabName,
          tabBody: parsedValue.tabBody,
          syntaxHighlight: parsedValue.syntaxHighlight
        };
        tabs.push(newTab);
        console.log(notNullLocalStorageValue)
      })
      const sortedTabs: Tab[] = tabs.sort((a, b) => a.tabId - b.tabId);
      resolve(sortedTabs);
    } catch (err) {
      reject(err)
    }
  })
}
