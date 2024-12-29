
const asyncFunc = async () => {
    try {

        loader.style.display = "block";
        const data = await fetch("https://dummyjson.com/products");
        console.log(data,"first data");
        const response = await data.json();
        console.log(response);
        
       createCards(response.products);
    } catch (error) {
        console.log(error,"Error");
    } finally {
        loader.style.display = "none";
        console.log("Task completed");
    }
}
asyncFunc ();
const mainDiv = document.getElementById("Cards");

const createCards = (data) => {

 for(let i = 0;i < data.length ; i++ ) {
   const htmlCard = `
    <div class=" card border border-secondary rounded p-3 w-25 text-center m-3">
         <img src="${data[i].images[0]}" class=" w-50"/>
        <h1 class="heading mt-2">${data[i].title}
        </h1>
        <p class="m-0">Price: ${data[i].price}</p>
        <p class="m-0">Rating: ${data[i].rating} </p>  
        <button class="btn btn-primary mt-3">Add to cart</button>
    </div>`;
    mainDiv.innerHTML += htmlCard;
}
};