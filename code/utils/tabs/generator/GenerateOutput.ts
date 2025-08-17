import { Tab } from "../models/tab";

export const GenerateTabOutput = (tabs: Tab[]) => {
  const tabDataString = JSON.stringify(tabs, null, 2); // pretty print for readability

  return `
<section class="tabs-section">
  <nav class="tabs-nav"></nav>
  <section>
    <h1 class="tab-heading"></h1>
    <code class="tab-body"></code>
  </section>
</section>

<script>
  const $ = (element) => document.querySelector(element);
  const tabs = ${tabDataString};

  const nav = $(".tabs-nav");
  const heading = $(".tab-heading");
  const body = $(".tab-body");

  function renderTabs() {
    nav.innerHTML = "";
    tabs.forEach(tab => {
      const btn = document.createElement("button");
      btn.textContent = tab.tabName;
      btn.className = "tab-button";
      btn.id = tab.tabId;
      btn.addEventListener("click", () => setActiveTab(tab.tabId));
      nav.appendChild(btn);
    });
  }

  function setActiveTab(tabId) {
    const previousActiveTab = $(".tab-button.active");
    if (previousActiveTab) previousActiveTab.classList.remove("active");

    activeTabId = tabId;
    const tab = tabs.find(t => t.tabId === tabId);
    document.getElementById(tabId).classList.add("active");
    heading.textContent = tab.tabName;

    body.textContent = tab.tabBody;
    body.style.color = tab.syntaxHighlight ? "#c7254e" : "inherit";
  }

  let activeTabId = tabs.length > 0 ? tabs[0].tabId : null;
  renderTabs();
  if (activeTabId) setActiveTab(activeTabId);
</script>
  `;
};
