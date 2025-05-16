function displayOrders() {

    window.addEventListener("DOMContentLoaded", () => {
        const data = localStorage.getItem("cart-data");

        if (!data) {
            document.body.innerHTML = "<p>Nenhum item no carrinho.</p>";
            return;
        }

        const selectedItems = JSON.parse(data);
        let total = 0;

        const summary = document.getElementById("cart-summary");

        const title = document.createElement("h1")
        title.textContent = "Seu pedido:"
        summary.appendChild(title)

        const bnt_emptyCart = document.createElement("input")
        bnt_emptyCart.type = "submit"
        bnt_emptyCart.id = "emptyCart"
        bnt_emptyCart.value = "Esvaziar o carrinho"

        const breakpoint = document.createElement("br")

        selectedItems.forEach(item => {
            const p = document.createElement("p");
            p.textContent = `${item.name} – R$ ${item.price.toFixed(2)}`;
            summary.appendChild(p);
            total += item.price;
        });

        const totalElement = document.createElement("strong");
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
        summary.appendChild(totalElement);
        summary.appendChild(breakpoint)
        summary.appendChild(bnt_emptyCart)

        document.getElementById("emptyCart").addEventListener("click", (e) => {

            const data = localStorage.getItem("cart-data");

            if (data) {
                localStorage.setItem("cart-data", JSON.stringify([]));
                location.reload();
            }

        })


    });

}


displayOrders()
