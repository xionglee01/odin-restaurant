import backgroundImage from './burgerHome.jpg';

function homePage(content)
{
    const textContainer = document.createElement("div");
    textContainer.classList.add("textCont");
    const text = document.createElement("p");
    textContainer.appendChild(text);
    text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    content.append(textContainer);
}



export default homePage;