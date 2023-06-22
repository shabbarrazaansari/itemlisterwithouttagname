// // Headers.style.color=black;
// var headertitle = document.getElementById("header-title");
// headertitle.style.borderBottom= "solid,3px,black";
// Get the element with id "header-title"
// var headerTitle = document.getElementById("header-title");

// Add a border to the bottom of the element
// headerTitle.style.borderBottom = "1px solid black";
// Select the elements by class name
var listItems = document.getElementsByClassName('list-group-item');

// Make the 3rd element have a green background color
listItems[2].style.backgroundColor = 'green';

// Make all elements have bold font weight
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = 'bold';
}
