
const mainDiv = document.getElementById("Cards");
const loader = document.getElementById("loader"); // Ensure you have a loader element


 // Create product cards
 
const asyncFunc = async () => {
    try {
        mainDiv.innerHTML = `<img src="https://i.giphy.com/uIJBFZoOaifHf52MER.webp" />`;
       
        loader.innerHTML = "<p>loading..</p>"
        const data = await fetch("https://dummyjson.com/products");
        const response = await data.json();
       
        loader.innerHTML ="";
        mainDiv.innerHTML = "";  // Clear the loading image
 return response        

    } catch (error) {
        mainDiv.innerHTML = `<h1>Something Went Wrong</h1>`;
        console.log(error, "Error");
    } finally {
         // Hide loader
        console.log("Task completed");
    }
};




const createCards = (data) => {
    for (let i = 0; i < data.length; i++) {
        const htmlCard = `
            <div class="card border border-secondary rounded p-3 w-25 text-center m-3">
                <img src="${data[i].images ? data[i].images[0] : data[i].img}" class="imgg w-50"/>
                <h1 class="heading mt-2">${data[i].title || data[i].name}</h1>
                <p class="m-0">brand: ${data[i].brand}</p>
                <p class="m-0">Price: ${data[i].price}</p>
                <p class="m-0">Rating: ${data[i].rating}</p>  
                <button class="btn btn-primary mt-3 cart">
                    <span><i class="fa-solid fa-cart-shopping"></i></span>Add to cart</button>
            </div>
        `;
        mainDiv.innerHTML += htmlCard;  // Append the card
    }
};
const allProducts = JSON.parse(localStorage.getItem("data")) || asyncFunc()
 createCards(allProducts);
