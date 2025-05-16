

const menu = [

    {
        title: "Pasteis salgados",
        items: [
            { name: "Carne", price: 8 },
            { name: "Frango com Catupiry", price: 9 },
            { name: "Queijo", price: 7 },
            { name: "Calabresa com Mussarela", price: 9 },
            { name: "Palmito com Requeijão", price: 10 },
            { name: "Carne Seca com Abóbora", price: 11 },
            { name: "Bacon com Cheddar", price: 10 },
            { name: "Vegetariano (espinafre, queijo e tomate)", price: 9 },
        ]
    },


    {
        title: "Pasteis doces",
        items: [
            { name: "Chocolate com Morango", price: 10 },
            { name: "Romeu e Julieta (goiabada e queijo)", price: 9 },
            { name: "Banana com Canela e Leite Condensado", price: 8 },
            { name: "Doce de Leite com Coco", price: 9 },
            { name: "Nutella com Morango", price: 12 },
            { name: "Maracujá com Leite Condensado", price: 9 },
            { name: "Brigadeiro Cremoso", price: 10 },
        ]
    },

    {
        title: "Bebidas",
        items: [
            { name: "Refrigerante Lata", price: 5 },
            { name: "Água Mineral", price: 3 },
            { name: "Caldo de Cana", price: 6 },
            { name: "Suco de Laranja Natural", price: 7 },
            { name: "Guaraná Natural", price: 6 },
            { name: "Chá Gelado de Limão", price: 5 },
            { name: "Cerveja Long Neck", price: 9 },
            { name: "Água com Gás", price: 4 },
        ]
    }


]






function optionsHandler(array) {
    let element = document.getElementById("options")
    let list_title = document.createElement("h3");
    list_title.textContent = array.title.toUpperCase();
    element.appendChild(list_title)


    const ul = document.createElement("ul")


    array.items.forEach((item) => {
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = item.name

        const label = document.createElement("label")
        label.htmlFor = item.name
        label.textContent = `${item.name} – R$ ${item.price.toFixed(2)}`;

        element.appendChild(checkbox)
        element.appendChild(label)
        element.appendChild(li)

    });


    const submitBnt = document.createElement("input")
    submitBnt.type = "submit"
    submitBnt.id = "finilizeOrder"
    submitBnt.value = "Adicionar ao carrinho🛒"

    element.appendChild(ul)
    element.appendChild(submitBnt)


    // submit order button behavior setup
    document.getElementById("finilizeOrder").addEventListener("click", (e) => {
        e.preventDefault();

        const currentCartData = JSON.parse(localStorage.getItem("cart-data")) || []

        const checkBoxes = document.querySelectorAll("#options input[type='checkbox']:checked")
        const selectedNewItems = []

        checkBoxes.forEach((checkbox) => {
            menu.forEach((category) => {
                const match = category.items.find((item) => item.name === checkbox.id)
                match ? selectedNewItems.push(match) : console.log("not a match")
            })
        })

        const allItems = [...currentCartData]

        selectedNewItems.forEach((newItems) => {
            const alreadyChosen = allItems.find((item) => item.name === newItems.name)
            if (!alreadyChosen) {
                allItems.push(newItems)
            }
        })

        //saves data in currentcartdata
        localStorage.setItem("cart-data", JSON.stringify(allItems))

        openNav()



    })








}












function categorySelector() {
    const dropdown = document.getElementById("menu")
    let element = document.getElementById("options")
    dropdown.addEventListener('change', function (event) {
        const selectedValue = event.target.value;

        element.innerHTML = "";

        if (selectedValue === "Pastel_Salgado") {
            optionsHandler(menu[0])

        } else if (selectedValue === "Pastel_Doce") {
            optionsHandler(menu[1])

        } else if (selectedValue === "Bebidas") {
            optionsHandler(menu[2])

        } else {
            let none_IsSelected = document.createElement("p")
            none_IsSelected.textContent = "Suas opções aparecerão aqui🫡"
            element.appendChild(none_IsSelected)
        }

    })

}




categorySelector();