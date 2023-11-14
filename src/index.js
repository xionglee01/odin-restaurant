import homePage from "./home";
import {initial, remove} from "./pageLoad";
import loadMenu from "./menu";
import './style.css';

// console.log("HELLO WORLD");
const content = document.querySelector("#content");
initial(content);

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

function setActive(val)
{
    const lastActive = document.querySelector(".active");
    lastActive.classList.remove("active");
    val.classList.add("active");
}

home.addEventListener("click", function()
{
    remove();
    setActive(home);
    homePage(content);
});

menu.addEventListener("click", function()
{
    remove();
    setActive(menu);
    loadMenu(content);
});

contact.addEventListener("click", function()
{
    remove();
    setActive(contact);
});

homePage(content);