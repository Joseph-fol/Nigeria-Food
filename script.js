const foods = document.getElementById("foods")

const endpoint = "https://mongotest2026.vercel.app/api/foods"

const displayCards = async() => {
    const response = await fetch(endpoint)
    const jsAwaited = await response.json()
    console.log(jsAwaited);
    

    foods.innerHTML = jsAwaited.data.map(details =>  `
            <div class="rounded-t-[20px] overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div class="relative"><a href="#">
                        <img class="w-full h-full"
                            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains">
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                    <a href="#!">
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
    ).join("");   
};

displayCards()

// async function checkInfo() {
//     try{
//         const result = fetch(endpoint)
//         const awaited = await result
//         const convertedResult = await awaited.json()
//         displayFoods(convertedResult.data)
        
//         console.log(convertedResult);
//     } catch(error){
//         console.log(error);
//     }
    

//     function displayFoods(foods) {
//         const foodHTML = foods.map(info => `
//             <div class="rounded-t-[20px] overflow-hidden shadow-lg flex flex-col">
//                 <a href="#"></a>
//                 <div class="relative"><a href="#">
//                         <img class="w-full h-full"
//                             src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
//                             alt="Sunset in the mountains">
//                         <div
//                             class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
//                         </div>
//                     </a>
//                     <a href="#!">
//                         <div class="flex">
//                             <div class="text-xs absolute top-0 left-0 px-4 py-1 text-lg bg-white text-black mt-3 ml-3 mr-3  hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out rounded-[20px]">
//                                 <p class="font-semibold text-md text-gray-500">Yoruba</p>
//                             </div>

//                             <div
//                                 class="text-xs absolute top-0 right-0 bg-white px-4 py-2 text-black mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//                                 <p class="font-semibold text-md text-gray-500">Fav</p>
//                             </div>

//                         </div>
                        
//                     </a>
//                 </div>

//                 <div class="px-4 py-4 mb-auto bg-white">
//                     <a href="#"
//                         class="font-bold text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">${info.name}</a>
//                     <p class="text-gray-500 text-md">
//                         ${info.description}
//                     </p>
//                 </div>

//                 <div class="px-6 py-3 flex flex-row items-center justify-between bg-white border ">
//                     <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
//                         <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
//                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
//                             style="enable-background:new 0 0 512 512;" xml:space="preserve">
//                             <g>
//                                 <g>
//                                     <path
//                                         d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
//                                     </path>
//                                 </g>
//                             </g>
//                         </svg>
//                         <span class="ml-1">6 mins </span>
//                     </span>

//                     <p class="text-green-900 font-bold">₦${info.price}</p>
//                 </div>
//             </div>

//         `).join("");

//         foodsContainer.innerHTML = foodHTML
//     }
// }  
// checkInfo()



//         `
//     })
// }

// checkInfo()


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