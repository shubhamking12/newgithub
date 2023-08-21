//QUERY SELECTOR
var secondItem= document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
// QUERY SELECTOR ALL
var items=document.querySelectorAll('.list-group-item');
console.log(items);
items[2].style.fontColor='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}