let dark = true;

const toggle = document.getElementById("change-Theme");

document.body.className = "dark";

toggle.onclick = () => {
  dark = !dark;
  document.body.className = dark ? "dark" : "light";
};



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

i18next.init({
  lng: "en",
  resources: {
    en: { translation: { title: "Hello", subtitle: "Welcome" } },
    es: { translation: { title: "Hola", subtitle: "Bienvenido" } },
    ja: { translation: { title: "hi", subtitle: "yokoso" } },
    
  }
}, updateUI);


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