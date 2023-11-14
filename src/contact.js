function contactPage(content)
{
    const container = document.createElement("div");
    container.classList.add("contactCont");
    const address = document.createElement("h4");
    address.innerText = "Address: 92 North Longbranch Avenue Coachella, CA 92236";
    const hours = document.createElement("h4");
    hours.innerText = "Hours Open: Mon-Sun: 10am - 9pm";
    const phone = document.createElement("h4");
    phone.innerText = "Phone: (123) 123 - 1234";

    container.append(address, hours, phone);
    content.append(container);
}


export default contactPage;