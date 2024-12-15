const storyNav = document.getElementById('storyNav');
const storyAdd = document.getElementById('storyAdd');
const storyList = document.getElementById('storyList');
const showForm = document.getElementById('showForm');
const storyForm = document.getElementById('storyForm');
const inputImg = document.getElementById('inputImg');
const imageDiv = document.getElementById('imageDiv');
const toast = document.getElementById('toast');
const toastAnime = document.getElementById('toastAnime');
const closeForm = document.getElementById('closeForm');

// Toggle the story form display
showForm.addEventListener('click', function () {
    if (storyForm.style.display === 'none' || storyForm.style.display === '') {
        storyForm.style.display = 'grid';
    } else {
        storyForm.style.display = 'none';
    }
});

// if (localStorage.length === 0){

// } else{
//     return;
// check if we add or delete from the localStorage 
// }


if (localStorage.length > 0) {
    for (i = 0; i < localStorage.length; i++) {
        console.log(`imageUrl${storyList.children.length}`)
        console.log(`imageUrl${storyList.children.length[i]}`)

        const newStory = document.createElement('div');
        newStory.className = 'w-14 h-14 overflow-hidden rounded-full border border-gray-600 grid place-content-center cursor-pointer';
        // Create an img element
        const newImage = document.createElement('img');
        newImage.src = localStorage.getItem(`imageUrl${storyList.children.length}`); // Retrieve the image URL from local storage
        newImage.className = 'w-full h-full object-cover rounded-full'; // Add styles to the image
        // Append the image to the story div
        newStory.appendChild(newImage);

        // Assign a unique ID to the new story
        newStory.id = `newStory${storyList.children.length}`;

        // Add the new story to the story list
        storyList.appendChild(newStory);

        // localStorage.removeItem("imageUrl")
        imageDiv.textContent = '';
        inputImg.inputMode = '';
    }
}


// Add story
// storyAdd.addEventListener('click', function () {
//     const newStory = document.createElement('div');
//     newStory.className = 'w-14 h-14 overflow-hidden rounded-full border border-gray-600 grid place-content-center';
//     // console.log(storyList.children.length)
//     // console.log(storyList.children.length -1)
//     // Create an img element
//     const newImage = document.createElement('img');
//     newImage.src = localStorage.getItem(`imageUrl${storyList.children.length}`); // Retrieve the image URL from local storage
//     newImage.className = 'w-full h-full object-cover rounded-full'; // Add styles to the image

//     if (localStorage.length === 0) {
//         // window.alert("please select an image");
//         toast.classList.remove('-right-72');
//         toast.classList.add('right-12');
//         toast.classList.add('bg-red-500')
//         const createWarningH1 = document.createElement('h1')
//         createWarningH1.textContent = 'you shoold select an image'
//         toast.appendChild(createWarningH1)
//         toastAnime.classList.add('toast-animate')
//         setTimeout(() => {
//             toast.classList.remove('right-12')
//             toast.classList.add('-right-72')
//             toast.removeChild(createWarningH1)
//             // check if the time was not end
//             if (toastAnime.classList.contains('toast-animate')) toastAnime.classList.remove('toast-animate')
//         }, 2000)
//         return;
//     } else {


//         // Append the image to the story div
//         newStory.appendChild(newImage);

//         // Assign a unique ID to the new story
//         newStory.id = `newStory${storyList.children.length}`;

//         // Add the new story to the story list
//         storyList.appendChild(newStory);
//     }
//     // localStorage.removeItem("imageUrl")
//     imageDiv.textContent = '';
//     inputImg.inputMode = '';
// });


// Check if we have an image in the input
inputImg.addEventListener('change', function () {
    // Get the first selected file
    const file = inputImg.files[0];
    if (file) {
        // Create a FileReader to read the file
        const reader = new FileReader();
        reader.onload = function (event) {
            // Display the image in the imageDiv
            imageDiv.innerHTML = '';
            const img = document.createElement('img');
            img.src = event.target.result;
            img.className = 'w-full h-full object-cover rounded-full';
            imageDiv.appendChild(img);
            storyAdd.addEventListener('click', function () {
                localStorage.setItem(`imageUrl${storyList.children.length}`, event.target.result);
                window.location.reload();
            })
        };
        reader.readAsDataURL(file);

    } else {
        imageDiv.innerHTML = 'No image selected';
    }
});


// close the add story modal
closeForm.addEventListener('click', function () {
    storyForm.style.display = 'none'
})