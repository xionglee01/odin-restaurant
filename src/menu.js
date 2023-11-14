import cheeseburger from "./cheeseburger.jpg";
import deluxeburger from "./deluxe.jpg";
import baconburger from "./baconburger.jpg";
import udeluxeburger from "./udeluxeburger.jpg";
const descriptionPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum mattis pellentesque id.";


const burger1 = createItem("Cheeseburger", "$2.00", cheeseburger, descriptionPlaceHolder);
const burger2 = createItem("Deluxe burger", "$8.00", deluxeburger, descriptionPlaceHolder);
const burger3 = createItem("Bacon burger", "$12.00", baconburger,descriptionPlaceHolder);
const burger4 = createItem("Ultra deluxe burger", "$15.00", udeluxeburger, descriptionPlaceHolder);


let menu = [burger1, burger2, burger3, burger4];


function createItem (name, price, image, description)
{
    return{name, price, image, description};
}

function createCard(burger)
{
    const container = document.createElement("div");
    container.classList.add("cardContainer");
    const image = document.createElement("img");
    image.setAttribute("src", burger.image);
    const itemName = document.createElement("h4");
    itemName.innerText = burger.name;
    itemName.classList.add("itemName");
    const itemPrice = document.createElement("h4");
    itemPrice.classList.add("itemPrice");
    itemPrice.innerText = burger.price;
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("itemDescription");
    itemDescription.innerText = burger.description;

    container.append(image, itemName, itemPrice, itemDescription);

    return container;
}


function loadMenu(content)
{
    const container = document.createElement("div");
    container.classList.add("menuCont");
    menu.forEach(element => {
        const card = createCard(element);
        container.appendChild(card);
    });
    content.append(container);
}

export default loadMenu;