

let forms=document.forms;


forms[0].addEventListener("submit",(e)=>{

e.preventDefault();


let obj={

    username: e.target[0].value,
    password: e.target[1].value
}
console.log(obj);



// fetch(" http://localhost:3000/posts",{
//     method:"POST",   //POST //GET
//     headers:{
//         'content-type':'application/json'
//     },
//      body:JSON.stringify(obj)
// }).then((val)=>{});







// fetch("http://localhost:3000/posts",{

//     method:"GET",
    
// }).then((val)=>{
//     return val.json()
// }).then((vla)=>{

// vla.map((val,ind)=>{

//     let divm=document.getElementById("div");

//     let divv=document.createElement("div");

//     divv.innerHTML=`<p>${val.id}</p>

//     <h1>${val.username}</h1>
//     <h1>${val.password}</h1>
    
//     `
//     divm.appendChild(divv)

// })


// })







// fetch(" http://localhost:3000/posts/4",{
//     method:"DELETE",   //POST //GET
//     headers:{
//         'content-type':'application/json'
//     },
//     body:JSON.stringify(obj)
// }).then((val)=>{});






// fetch("http://localhost:3000/posts/6",{
//     method:"PUT",
//     headers:{
//         'content-type':'application/json'
//     },
//     body:JSON.stringify({username:"pinky"})
// })







// fetch("http://localhost:3000/posts/5",{
// method:"PATCH",
// headers:{
// 'content-type':'application/json'
// },
// body:JSON.stringify({username:"adicherla"})
// }).then((val)=>{})






})


