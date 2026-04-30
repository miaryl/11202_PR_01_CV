let dark = true;

const toggle = document.getElementById("change-Theme");

document.body.className = "dark";

toggle.onclick = () => {
  dark = !dark;
  document.body.className = dark ? "dark" : "light";
};


/*
const langPanel = document.getElementById("langPanel");
const langTab = document.getElementById("langTab");

langTab.onclick = () => {
  langPanel.classList.toggle("open");
};



document.addEventListener("click", (e) => {
  if (!langPanel.contains(e.target)) {
    langPanel.classList.remove("open");
  }
});


/*sepatate to another folder??*/
/*
i18next.init({
  lng: "en",
  resources: {
    en: { translation: { name: "Jane Doe", title: "Welcome" } },
    es: { translation: { name: "Jane Doo", title: "Bienvenido" } },
    ja: { translation: { name: "Jane D", title: "yokoso" } },
    
  }
}, updateUI());


function updateUI() {
  document.getElementById("title").innerText = i18next.t("title");
  document.getElementById("subtitle").innerText = i18next.t("subtitle");
}

document.querySelectorAll(".lang-menu button").forEach(btn => {
  btn.onclick = () => {
    const lang = btn.dataset.lang;
    i18next.changeLanguage(lang, updateUI);
    langPanel.classList.remove("open");
  };
});
*/

const folder = document.getElementById("folder");
const content = document.getElementById("content");

let isOpen = false;
let activeTab = null;



const data = {
  experience: [
    { title: "Senior Product Designer", company: "Abc", date: "2023" }
  ],
  education: [
    { title: "MFA", company: "University", date: "2019" }
  ],
  languages: [
    { title: "English", level: "Native" }
  ],
  skills: [
    { category: "Design", items: ["Figma", "Sketch"] }
  ],
  projects: [
    { title: "Banking App", date: "2024" }
  ]
};

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;

    if (!isOpen) {
      folder.classList.add("open");
      isOpen = true;
    }

    activeTab = tab;
    renderContent(tab);
  });
});

function renderContent(tab) {
  const items = data[tab];
  let html = `<h2>${tab.toUpperCase()}</h2>`;

  if (tab === "skills") {
    items.forEach(group => {
      html += `<div class="card">
        <strong>${group.category}</strong><br/>
        ${group.items.join(", ")}
      </div>`;
    });
  }

  else if (tab === "languages") {
    items.forEach(lang => {
      html += `<div class="card">
        <strong>${lang.title}</strong><br/>
        ${lang.level}
      </div>`;
    });
  }

  else {
    items.forEach(item => {
      html += `<div class="card">
        <strong>${item.title}</strong><br/>
        ${item.company || ""}<br/>
        ${item.date || ""}
      </div>`;
    });
  }

  content.innerHTML = html;
}