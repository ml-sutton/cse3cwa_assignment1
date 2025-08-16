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
      const tabs: Record<number,Tab> = {}
      keys.forEach((key, idx) => {
        const localStorageValue = window.localStorage.getItem(key);
        if (!localStorageValue) resolve(null);
        const notNullLocalStorageValue = localStorageValue as string
        const parsedValue = JSON.parse(notNullLocalStorageValue);

        const newTab: Tab = {
          tabId: idx + 1,
          tabName: parsedValue.tabName,
          tabBody: parsedValue.tabBody,
          syntaxHighlight: parsedValue.syntaxHighlight
        };
        tabs[parsedValue.tabId] = newTab;
      })
      const sortedTabs: Tab[] = [];
      for(let i =0; i<Object.keys(tabs).length;++i)
      {
        sortedTabs.push(tabs[i])
      }
      resolve(sortedTabs);
    } catch (err) {
      reject(err)
    }
  })
}
