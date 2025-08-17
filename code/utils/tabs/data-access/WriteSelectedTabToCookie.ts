
// cookie structure = `selectedItem={item};Max-Age={1 year};SameSite=None; path=/`

export default function WriteSelectedTabToCookie(selectedTab: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const oneYearInSeconds = 60 * 60 * 24 * 365
    document.cookie = `selectedItem=${encodeURIComponent(selectedTab)}; Max-Age=${oneYearInSeconds}; path=/`;
    resolve(true);
  })
}
