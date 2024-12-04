let add = document.getElementById("add");
      let txt = document.querySelector(".write");
      let topic = document.querySelector(".topic");
      let div = document.querySelector(".already-tasks");
      let remove= document.getElementById("remove");
      const keys=Object.keys(localStorage);
      for(let i=0; i<keys.length; i++){
        key=keys[i];
        value=localStorage.getItem(key);
        generator(key, value);
        }
      
      add.addEventListener("click", () => {
      
        if (txt.value != "" && topic.value !="") {
         
          let key=topic.value;
          let value= txt.value;
          localStorage.setItem(key, value)
          generator(key, value);

        } else {
          alert("Both Topic and Task must have something wriiten");
        }
      });
      function generator(key, value){
        let list = document.createElement("li");
          list.className = "commited";
          div.appendChild(list);

          let span1 = document.createElement("span");
          span1.textContent = key;
          span1.className = "input added";
          list.appendChild(span1);

          let span2 = document.createElement("span");
          span2.textContent = value;
          span2.className = "input added";
          list.appendChild(span2);

          let btn = document.createElement("button");
          btn.className = "btn del";
          btn.textContent = "DELETE";
          list.appendChild(btn);

          txt.value = "";
          topic.value="";

          // list remove

          btn.addEventListener("click", () => {
            list.remove();
            localStorage.removeItem(key);
          });
      }

      remove.addEventListener("click",()=>{
        localStorage.clear();
        location.reload();
      })