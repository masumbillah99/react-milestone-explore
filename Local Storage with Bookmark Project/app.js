const loadProduct = () => {
    fetch("./product.json")
      .then((response) => response.json())
      .then((data) => displayProduct(data));
  };
  
  const displayProduct = (data) => {
    const cards = document.getElementById("cards");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card", "m-2");

      // check bookmarked
      const isBookmarked = checkBookmark(product.id);
    //   console.log(isBookmarked);
  
      card.innerHTML = `
            <div class="bookmark-icon">

                <i onclick="${isBookmarked ? `removeBookmarked('${product.id}')`
                    : `handleBookMark('${product.name}', '${product.id}',
                    '${product.price}')`}"
                    class="${isBookmarked ? "fa-solid fa-bookmark" : 
                        "fa-regular fa-bookmark"}" 
                    title="remove from bookmark">
                </i>

            </div>
            <div class="product-img-container">
                <img class="product-img" src=${product.image} alt="" />
            </div>
            <h3>${product.name}</h3>
            <p>The Widget 3000 is the latest and greatest in widget</p>
            <div class="priceAndButtons">
                <h2 class="text-primary">$${product.price}</h2>
                <button class="btn btn-primary">Buy Now</button>
            </div>
        `;
        // <i onclick="handleBookMark('${product.name}', '${product.id}',
        //     '${product.price}')" class="fa-regular fa-bookmark" title="bookmark this item">
        // </i>  
      cards.appendChild(card);
    });
};

// handle bookmarked in local storage
const handleBookMark = (name, id, price) => {
    // console.log({id,name, price});
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const product = { name, id, price, bookmark:true }

    if(previousBookmark) {
        const isThisProductMarked = previousBookmark.find(pd => pd.id === id);
        if(isThisProductMarked) {
            Swal.fire({
                icon: 'error',
                title: 'Warrrrrrrrrrr-ning',
                text: 'This item is already book marked',
            })
        } else {
            bookmark.push(...previousBookmark, product);
            localStorage.setItem("bookmark", JSON.stringify(bookmark));
        }
    } else {
        bookmark.push(product);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
}

// handle remove book mark from local storage
const removeBookmarked = (id) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    const remainingBookmark = previousBookmark.filter((product) => product.id !== id);
    localStorage.setItem("bookmark", JSON.stringify(remainingBookmark));
}

// toggle bookmark
// check is this item bookmarked?
const checkBookmark = (id) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    const isBookmarked = previousBookmark?.find(product => product.id == id);
    if(isBookmarked) {
        return true;
    } else {
        return false;
    }
}



loadProduct();