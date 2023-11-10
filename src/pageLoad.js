//CREATES OUR NAVBAR
function initial(content)
{
    const initial = document.createElement("div");
    initial.setAttribute("id", "initial");
    const container = document.createElement("div");
    container.classList.add("container");
    const header = document.createElement("h1");
    header.innerText = "BORGERS";
    container.append(header);
    
    const navbar = document.createElement("nav");
    const navcontainer = document.createElement("div");
    navcontainer.classList.add("nav-cont");

    let home, menu, contact; 
    home = document.createElement("p");
    home.setAttribute("id", "home");
    home.classList.add("active");
    menu = document.createElement("p");
    menu.setAttribute("id", "menu");
    contact = document.createElement("p");
    contact.setAttribute("id", "contact");

    home.innerText = "HOME";
    menu.innerText = "MENU";
    contact.innerText = "CONTACT";

    navcontainer.append(home, menu, contact);
    navbar.append(navcontainer);
    initial.append(navbar, container);
    content.append(initial);
}

function remove()
{
    const initial = document.querySelector("#initial");
    const content = document.querySelector("#content");
    
    console.log(content.childNodes);

    content.childNodes.forEach( nodes=> {
        if(nodes != initial)
        {
            nodes.remove();
        }
    });
}

export {initial, remove};