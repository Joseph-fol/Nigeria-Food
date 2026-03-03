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


const foodDetail = document.getElementById("foodDetail")
const BASE_URL = "https://mongotest2026.vercel.app";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");



const displayContents = async () => {
    const fetched = await fetch(`${BASE_URL}/api/foods/${id}`);
    const response = await fetched.json();
    console.log(response);
    const eachFood = response.data;

    foodDetail.innerHTML = `
        <div class="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
            
            <div class="h-64 md:h-auto relative">
                <img src="${getImagePath(eachFood.name)}" 
                     alt="${eachFood.name}" 
                     class="w-full h-full object-cover">

                <div class="text-xs absolute top-0 left-0 px-4 py-1 text-lg bg-white text-black mt-3 ml-3 mr-3 rounded-[20px]">
                    <a href="index.html">
                        <p class="font-semibold text-md text-gray-500">Back</p>
                    </a>
                </div>
            </div>

            <div class="p-6 flex flex-col justify-between">
                <div class="leading-8">
                    <h2 class="text-3xl font-bold font-serif text-gray-800 dark:text-white mb-2">
                        ${eachFood.name}
                    </h2>

                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        ${eachFood.description}
                    </p>

                    <p class="text-white"><strong> Difficulty: </strong> ${eachFood.difficulty}</p>
                    <p class="text-white"><strong>Calories:</strong> ${eachFood.calories}</p>
                    <p class="text-white"><strong>Price:</strong> ₦${eachFood.price}</p>

                    <strong class="text-red-600 pt-3">Ingredient</strong>
                    <ul class = "text-white">
                        <li>Maggi</li>
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
};

displayContents();