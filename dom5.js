//localStorage.setItem('fname','Shubham');
let fname_serialized=JSON.stringify(fname);
localStorage.setItem('fname'),fname_serialized;
let  fname_deserialized=JSON.parse(localStorage.getItem('fname'));
console.log(fname_deserialized);