const foods = document.getElementById("foods")

const endpoint = "https://mongotest2026.vercel.app/api/foods"

const displayCards = async() => {
    const response = await fetch(endpoint)
    const jsAwaited = await response.json()

    foods.innerHTML = jsAwaited.data.map(details =>  `
            <div>
                ${details.name}
            </div>
        `
    ).join("");   
};

displayCards()
