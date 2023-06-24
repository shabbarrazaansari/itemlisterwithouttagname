// // Headers.style.color=black;
// var headertitle = document.getElementById("header-title");
// headertitle.style.borderBottom= "solid,3px,black";
// Get the element with id "header-title"
// var headerTitle = document.getElementById("header-title");

// Add a border to the bottom of the element
// headerTitle.style.borderBottom = "1px solid black";
// Select the elements by class name
// var listItems = document.getElementsByClassName('list-group-item');

// Make the 3rd element have a green background color
// listItems[2].style.backgroundColor = 'green';

// Make all elements have bold font weight
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontWeight = 'bold';
// // }
// var items = document.querySelectorAll("#items li");

// // Change font color of the second item and background color of all odd items to green
// if (items.length >= 2) {
//   items[1].style.color = "green";
// }

// for (var i = 0; i < items.length; i++) {
//   if (i % 2 !== 0) {
//     items[i].style.backgroundColor = "green";
//   }
// // }
var itemlist=document.querySelector('#items');
// console.log(itemlist);
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor="grey";
// // console.log(itemlist.lastElementChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor="grey";
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);
var newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');

var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);
