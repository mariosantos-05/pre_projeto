const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(preferes-color-scheme: dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toogle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme &&  systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add('display-none'); 
        return;
    }
    sunIcon.classList.add('display-none');
};

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;

    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIconIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();

