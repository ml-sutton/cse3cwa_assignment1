import { Tab } from "../models/tab";

export default function WriteTabsToLocalStorage(tabs:Tab[]): Promise<boolean>
{
  return new Promise((resolve, reject)=>{
    if(typeof window === "undefined") resolve(false);
    if(tabs.length===0) resolve(false);
    try 
    {
      tabs.forEach((tab)=> {
        const tabKey: string = `TAB#${tab.tabId}`;
        window.localStorage.setItem(tabKey,JSON.stringify(tab));
      })
      resolve(true);
    } catch (error)
    {
      reject(error);
    }
  })
}
