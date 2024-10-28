{
    var data="hello"
    let value=24
    const name="Arya"

    if (true){
    var data="World"
    let value="20"
    const name="Dwithi"
    console.log(data);
    console.log(value);
    console.log(name);
}
    console.log(data);
    console.log(value);
    console.log(name);
}
{
    var a = 1;
    let b = 2;  
    const c = 3;
    
    if (true) {
      var a = 10;   
      let b = 20;
      const c = 30;
      
      console.log(a);  
      console.log(b);  
      console.log(c);
    }
    
    console.log(a); 
    console.log(b);  
    console.log(c);
  }
{  
var obj={
  Name:"Arya",
  Age:21,
  City:"Thodupuzha"
}
  console.log(obj);
}
  obj.City="Idukki" 
  console.log(obj);
{
  var array=["Arya","Anjali","Aswathy","Abhirami"]
  console.log(array[3]);
  console.log(array.length);
  array.push("Avanthika");
  console.log(array);
  array.pop()
  console.log(array);
  array[3]="Abhi"
  console.log(array);
}
var ao=[
  {
    Id:1,
    Name:"Dwithi",
    Place:"EKM"
  },
  {
    Id:2,
    Name:"Arya",
    Place:"IDUKKI"
  },
  {
    Id:3,
    Name:"Avanthika",
    Place:"PKD"
  }
]
  ao.map((item)=>{
    console.log(item.Name);
  });  
  ao.map((item)=>{
    console.log(item.Place);
  });  
  console.log(ao.filter((item)=>item.Id===1));
  console.log(ao.find((item)=>item.Id===3));
  console.log(ao.findIndex((item)=>item.Id===2));

function simple(){
  return "i'm Arya";
}
console.log(simple());

function demo3(X,Y){
  return X/Y;
}
console.log(demo3(999,1909));

function demo1(X,Y){
  return "sum="+(X+Y);
}
console.log(demo1(999,1909));

function demo2(X,Y){
  return "sum="+X*Y;
}
console.log(demo2(999,1909));

const sub=(a,b)=>"sub="+(a-b);
console.log(sub(10,5));

//const pass=window.prompt("Enter Your Password")
//console.log(pass);

//const result=window.confirm("Are you sure");
//if(result){
  //console.log("Success");
//}
//else{
//  console.log("Cancelled");
//}

//window.alert("completed");



//{
//const mark=parseInt(window.prompt("Enter your mark.."));
//if(mark<40){
  //console.log("Failed")
//}
//else if(mark===40){
  //console.log("Pass");
//}
//else if(mark<=60){
  //console.log("Good");
//}
//else if(mark<=80){
  //console.log("Very Good");
//}
//else if(mark<=90){
  //console.log("Excellent");
//}
//else if(mark<=100){
  //console.log("Outstanding");
//}
//else{
  //console.log("Enter invalid Mark");
  //console.error("Error");
//}
//}
const head=document.getElementById("head")
console.log(document.getElementsByClassName("list"))
console.log(document.getElementsByTagName('li'))
console.log(document.querySelector('div.main h1'))
const head2=document.querySelector('header h1')
console.log(document.querySelectorAll('ul li'))

console.log("head2",head2.innerHTML);
head2.innerHTML="<a id='atag'>LOGO</a>"
head.textContent="Animal Kingdom";
const img1=document.getElementById('img1')
console.log("src of image",img1.getAttribute('src'))
console.log("alt of image",img1.getAttribute('alt'))
console.log("Name:",img1.getAttribute('data-url'))
img1.setAttribute('src','../IMAGE/cat.webp')
head.style.color='white'
const atag=document.getElementById('atag')
atag.style.color='white'

const com=document.getElementById('com')
const ptag=document.createElement('p')
ptag.textContent="New paragraph"
com.appendChild(ptag)
com.removeChild(ptag)
const h1t=document.createElement('h1')
  h1t.textContent='Hello World'
  com.appendChild(h1t)
console.log(head.parentNode)
const btn=document.getElementById('btn');
const inp=document.getElementById('inp')
btn.addEventListener('click',()=>{
  console.log(inp.value)
})
