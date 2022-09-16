function filterCategory(filterSelection, filterBy){
    // filter selection is category
    // filter by is thing to match
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        if(listItem.dataset.author === filterBy){ //filter by author
            listItem.style.display = "flex"; 
        } else {
            listItem.style.display = "none"; // this says to not display anything if there's no author tag on the filter item
        }
    } // 
}
function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        listItem.style.display = "flex";
    }
}

function filterCategory(filterSelection, filterBy){
    // filter selection is category
    // filter by is thing to match 
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        if(listItem.dataset.veg === filterBy){ //filter by dietary requirements
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
    } // 
}
function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        listItem.style.display = "flex";
    }
}

// function filterCategory(filterSelection, filterBy){
//     // filter selection is category
//     // filter by is thing to match 
//     let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
//     for(let listItem of itemsToFilter){
//         if(listItem.dataset.time === filterBy){ //filter by time
//             listItem.style.display = "flex";
//         } else {
//             listItem.style.display = "none";
//         }
//     } // 
// }
// function filterAll(){
//     let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
//     for(let listItem of itemsToFilter){
//         listItem.style.display = "flex";
//     }
// }

// function filterCategory(filterSelection, filterBy){
//     // filter selection is category
//     // filter by is thing to match 
//     let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
//     for(let listItem of itemsToFilter){
//         if(listItem.dataset.cuisine === filterBy){ //filter by cuisine
//             listItem.style.display = "flex";
//         } else {
//             listItem.style.display = "none";
//         }
//     } // 
// }
// function filterAll(){
//     let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
//     for(let listItem of itemsToFilter){
//         listItem.style.display = "flex";
//     }
// }

