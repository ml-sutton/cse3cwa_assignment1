import { Tab } from "../models/tab";

export default function ReadSelectedTabFromCookies(tabs: Tab[]): Promise<number | null> {
  return new Promise((resolve, reject) => {
    if (tabs.length == 0) resolve(null);

  })
}
