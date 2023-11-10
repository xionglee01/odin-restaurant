import homePage from "./home";
import {initial, remove} from "./pageLoad";
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



homePage(content);

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
});

contact.addEventListener("click", function()
{
    remove();
    setActive(contact);
});