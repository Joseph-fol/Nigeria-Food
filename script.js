const foods = document.getElementById("foods")

const allFoods = "https://mongotest2026.vercel.app/api/foods"

// console.log(singleDish);

// Function to get the image path based on food name
const getImagePath = (foodName) => {
    // Image mapping for specific food names
    const imageMap = {
        'jollof rice': 'jollof-rice.jpg',
        'egusi': 'egusi.jpg',
        'egusi soup': 'egusi.jpg',
        'efo riro': 'efo-riro.jpg',
        'pounded yam': 'pounded-yam.jpg',
        'akara': 'akara.jpg',
        'moi moi': 'moi-moi.jpg',
        'moin moin': 'moi-moi.jpg',
        'suya': 'suya.jpg'
    };

    const normalizedName = foodName.toLowerCase();
    const imageName = imageMap[normalizedName] || `${normalizedName.replace(/\s+/g, '-')}.jpg`;
    return `Images/${imageName}`;
}


const displayCards = async () => {
    const response = await fetch(allFoods)
    const jsAwaited = await response.json()
    // console.log(jsAwaited);

    foods.innerHTML = jsAwaited.data.map(details => `
            <div class="rounded-t-[20px] overflow-hidden shadow-lg flex flex-col">
                <a href="card-detail.html?id=${details.id}"><div class="relative">
                        <img class="w-full h-64 object-cover"
                            src="${getImagePath(details.name)}"
                            alt="${details.name}">
                        <div
                            class="focus:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
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
                        
                    </a>
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
            </a>
        `
    ).join("");
};

displayCards()




// async function fetchFoods() {
//     try {
//         const response = await fetch(endpoint);

//         if (!response.ok) {
//             console.log("Error fetching product")
//         } else {
//             response.json();
//         }
//     }
// }