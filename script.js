const foods = document.getElementById("foods")

const allFoods = "https://mongotest2026.vercel.app/api/foods"

const displayCards = async () => {
    const response = await fetch(allFoods)
    const jsAwaited = await response.json()
    console.log(jsAwaited); // Check the API response structure

    jsAwaited.data.map(details => {
        foods.innerHTML += `
            <div class="rounded-t-[20px] overflow-hidden shadow-lg flex flex-col hover:scale-105 transition">
                <div class="relative" onclick="openModal('${details.id}')" style="cursor: pointer;">
                    <img class="w-full h-64 object-cover"
                        src="Images/${details.id}.jpg"
                        alt="${details.name}">
                    <div
                        class="focus:bg-transparent transition duration-500 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                    <div class="flex">
                        <div class="text-xs absolute top-0 left-0 px-4 py-1 text-lg bg-white text-black mt-3 ml-3 mr-3  hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out rounded-[20px]">
                            <p class="font-semibold text-md text-gray-500">${details.region}</p>
                        </div>

                        <div
                            class="text-xs absolute top-0 right-0 bg-white px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            <p class="font-semibold text-md text-gray-500">Fav</p>
                        </div>
                    </div>
                </div>

                <div class="px-4 py-4 mb-auto bg-white">
                    <a href="#"
                        class="font-bold text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">${details.name}</a>
                    <p class="text-gray-500 text-md">
                        ${details.description}
                    </p>
                    <p class="text-gray-700 text-sm pt-2 font-medium">Difficulty: ${details.difficulty}</p>
                    <p class="text-gray-700 text-sm pt-2 font-medium">Calories: ${details.calories} calories</p>
                
                
                </div>

                <div class="px-6 py-3 flex flex-row items-center justify-between bg-white border ">
                    <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span class="ml-1">${details.preparationTime}</span>
                    </span>

                    <p class="text-green-900 font-bold">₦${details.price}</p>
                </div>
            </div>
        `
    })
};

displayCards()


const modalContent = document.getElementById("modalContent")
const foodModal = document.getElementById("foodModal")
const BASE_URL = "https://mongotest2026.vercel.app";

function getImagePath(foodName) {
    return `Images/${foodName}.jpg`;
}

window.openModal = async function(id){
    console.log("Modal opened with ID:", id);
    try {
        const fetched = await fetch(`${BASE_URL}/api/foods/${id}`);
        const response = await fetched.json();
        const eachFood = response.data;        

        const ingredientsList = eachFood.ingredients.map(ingredient => 
            `<li class="ml-4">${ingredient}</li>`
        ).join('');

    modalContent.innerHTML = `
        <div class="bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">        
            <div class="h-64 md:h-auto relative">
                <img src="Images/${eachFood.id}.jpg" alt="${eachFood.name}" class="w-full h-full object-cover">
                <button onclick="closeModal()" class="text-xs absolute top-0 left-0 px-4 py-1 text-lg bg-white text-black mt-3 ml-3 mr-3 rounded-[20px] hover:bg-gray-100">
                    <p class="font-semibold text-md text-gray-500">Back</p>
                </button>
            </div>

            <div class="p-6 flex flex-col justify-between">
                <div class="leading-8">
                    <h2 class="text-3xl font-bold font-serif dark:text-white mb-2">
                        ${eachFood.name}
                    </h2>

                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        ${eachFood.description}
                    </p>

                    <p class="text-white"><strong> Difficulty: </strong> ${eachFood.difficulty}</p>
                    <p class="text-white"><strong>Calories:</strong> ${eachFood.calories}</p>
                    <p class="text-white"><strong>Price:</strong> ₦${eachFood.price}</p>

                    <strong class="text-red-600 pt-3">Ingredients</strong>
                    <ul class="text-white list-disc">
                        ${ingredientsList}
                    </ul>
                </div>

                <div class="mt-6 text-right">
                    <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                        Add to Favorite
                    </button>
                </div>
            </div>
        </div>
    `;
    foodModal.classList.remove("hidden");
    foodModal.style.display = "flex";
    } 

    catch (error) {
        console.error("Error loading food details:", error);
    }
};

// Make closeModal globally accessible
window.closeModal = function() {
    foodModal.classList.add("hidden");
    foodModal.style.display = "none";
}

// Close modal when clicking outside the content
foodModal?.addEventListener('click', function(e) {
    if (e.target === foodModal) {
        closeModal();
    }
});