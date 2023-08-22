var itemList=document.querySelector('#items');
//PARENTELEMENT
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='red';
console.log(itemList.parentElement.parentElement.parentElement);
//CHILDREN
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//FIRST CHILD
console.log(itemList.firstChild);
//FIRSTELEMENTCHILD
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//LASTELEMENTCHILD

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 2';
// LASTECHILD
console.log(itemList.lastChild);
// NEXTSIBLING
console.log(itemList.nextSibling);
//NEXTELEMENTSIBLING
console.log(itemList.nextElementSibling);
//PREVIOUSSIBLING

console.log(itemList.previousSibling);
//PREVIOUSELEMENTSIBLING
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor='grey';

//create Element
//create a div

var newDiv=document.createElement('div');

//ADD CLASS
newDiv.className='hello';

//ADD ID
newDiv.id='hello1';

//Add Attribute
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);

