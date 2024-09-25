const input = document.querySelector(".input")
const box = document.querySelector(".box")

import { getData } from "./service.js";

const renderData = async (value) =>{
    try {
        if(value.length >= 1){
            const data = await getData(value)
    
            box.innerHTML = data.map((item) => `
            <div class = "div">
                <img src = "${item.img}" alt = "img" />
                <h1>${item.title}</h1>
            </div>
            `).join("")
        }else{
            box.innerHTML = ""
        }
    } catch (error) {
        
    }
}


const useDebounce = () => {
    let id;
    return () => {
      box.innerHTML = "<h1>Loading....</h1>";
      clearTimeout(id);
      id = setTimeout(() => {
        renderData(input.value);
      }, 500);
    };
  };
  
  const debounce = useDebounce();

  input.addEventListener("keyup", (e) => {
    debounce()
  })
