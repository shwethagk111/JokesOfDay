{/*<div id="joke" class="joke">AWESOME JOKE IS LOADING...</div>*/}
{ /* <button id="jokeBtn" class="btn">NEXT JOKE</button>*/}


//async-awaits
// GET https://icanhazdadjoke.com/
const jokes=document.querySelector('#joke')
const jokeBtn=document.querySelector('#jokeBtn')


// const generateJokes=()=>{
//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     //PROMISES
//     fetch('https://icanhazdadjoke.com/', setHeader).then((res)=> res.json() )
//     .then((data)=>  jokes.innerHTML=data.joke ).catch((error)=>{
//         console.log(error);
//     })
// }
// jokeBtn.addEventListener('click', generateJokes)
// generateJokes()

//or with ASYNC AWAITS

const generateJokes = async()=>{
   try{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    
    const res=await fetch('https://icanhazdadjoke.com/', setHeader)
    const data =await res.json()
    jokes.innerHTML=data.joke   
   }catch(error){
       console.log(`the error is ${error}`);
   }
}
jokeBtn.addEventListener('click', generateJokes);

generateJokes();



