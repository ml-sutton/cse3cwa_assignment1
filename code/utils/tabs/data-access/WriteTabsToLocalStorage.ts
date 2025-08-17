import { Tab } from "../models/tab";

export default function WriteTabsToLocalStorage(tabs: Tab[]): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") throw new Error();
    if (tabs.length === 0) resolve(false);
    try {
      window.localStorage.setItem("tabs", JSON.stringify(tabs));
      resolve(true);
    } catch (error) {
      reject(error);
    }
  })
}
