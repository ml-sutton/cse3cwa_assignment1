import { Tab } from "../models/tab"

export default function ReadTabsFromLocalStorage(): Promise<Tab[] | null> {

  return new Promise((resolve, reject) => {
    try {
      if (typeof window === 'undefined') resolve(null);
      const value = window.localStorage.getItem("tabs");
      if (value !== null) {
        const tabs: Tab[] = JSON.parse(value);
        return resolve(tabs);
      };
      window.localStorage.setItem("tabs", JSON.stringify([]));
      const refetchedValue = window.localStorage.getItem("tabs");
      if (refetchedValue !== null) {
        const tabs: Tab[] = JSON.parse(refetchedValue);
        return resolve(tabs);
      }
      return resolve(null)
    } catch (err) {
      return reject(err)
    }
  })
}
