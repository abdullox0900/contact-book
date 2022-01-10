let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elInputRelati = document.querySelector(".form__input-relate");
let elInputNum = document.querySelector(".form__input-number");
let resultList = document.querySelector(".result__num");

document.body.style.background = "linear-gradient(320deg, #00d1dd  0%, #4ba3dd 70%)"

const contacts = [];

elForm.addEventListener("submit", function (ev) {
     ev.preventDefault();

     let inputValue = elInput.value;
     let inputRelatiValue = elInputRelati.value;
     let inputNumber = elInputNum.value;

     let contact = {
          name: inputValue,
          relationship: inputRelatiValue,
          phone: inputNumber
     }

     contacts.push(contact)
     resultList.innerHTML = null;

     console.log(contacts);

     for (item of contacts) {
          elInput.value = null
          elInputRelati.value = null
          elInputNum.value = null

          // CREATE
          const resultItem = document.createElement("li");
          const resultTitle = document.createElement("h3");
          const resultNumDesc = document.createElement("p");
          const resultNumNum = document.createElement("p");

          //ATTR

          resultItem.setAttribute("class", "result__num-item");
          resultTitle.setAttribute("class", "result__num-header");
          resultNumDesc.setAttribute("class", "result__num-desc");
          resultNumNum.setAttribute("class", "result__num-num");

          //TEXT CONTENT
          resultTitle.textContent = item.name;
          resultNumDesc.textContent = item.relationship;
          resultNumNum.textContent = item.phone;

          //ADD

          resultList.appendChild(resultItem);
          resultItem.appendChild(resultTitle);
          resultItem.appendChild(resultNumDesc);
          resultItem.appendChild(resultNumNum);
     }

})