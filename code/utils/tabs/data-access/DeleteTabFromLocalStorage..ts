import { Tab } from "../models/tab";
import WriteTabsToLocalStorage from "./WriteTabsToLocalStorage";

export default function DeleteTabFromLocalStorage(tabs: Tab[], tabID: number): Promise<Tab[]> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof window === "undefined") throw new Error("window is undefined");
      const newTabs = [...tabs].filter(item => item.tabId != tabID)
      WriteTabsToLocalStorage(newTabs)
      return resolve(newTabs);
    } catch (error) {
      return reject(error)
    }


  })

}
