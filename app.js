// Here we create a variable named filterInput which contains the value of what we type in the search box
var filterInput = document.getElementById('filterInput');

//Here we add a Add event listener on on the input box with the Id of filterInput 
// We attaches a keyup event by using addEventListener on the input box with Id filterInput and runs the function filterNames whenever we press a key in the input box and releases the key 
filterInput.addEventListener('keyup', filterNames);

// Here is the filterNames function 
function filterNames() {
    //We create a variable named filterValue to Get value of input and change it to all uppercase letters
    var filterValue = document.getElementById('filterInput').value.toUpperCase();

    //Here we create a variable named ul which selects all the names from the ul
    var ul = document.getElementById('names');

    //Here we create a variable named li which contains the value of li with the class of collection-item from the ul variable
    var li = ul.querySelectorAll('li.collection-item');


    // Loop through collection-item list
    for (var i = 0; i < li.length; i++) {

        // Here we create a variable named a which selects all the a tag 
        var a = li[i].getElementsByTagName('a')[0];

        // If our typed word and the word in the list matches it remains on the page otherwise the words did not match will hide
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';

        } else {

            // Here we set the value of the unmatched words	to display none that if we search a word and our list elements doesn't contains that word that whole letter will be not seeing anymore.	
            li[i].style.display = 'none';
        }
    }
}