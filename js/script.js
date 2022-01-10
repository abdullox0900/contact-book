let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elInputRelati = document.querySelector(".form__input-relate");
let elInputNum = document.querySelector(".form__input-number");
let resultList = document.querySelector(".result__num");

document.body.style.background = "linear-gradient(320deg, #00d1dd  0%, #4ba3dd 70%)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Roboto, sans-serif";

const contactBox = document.querySelector(".contact__box");
const formHeader = document.querySelector(".form__header");
const newResult = document.querySelector(".result");
const newResultHeader = document.querySelector(".result__header");

contactBox.style.display = "flex";
contactBox.style.borderRadius = "20px";
contactBox.style.backgroundColor = "#fff";
contactBox.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"

elForm.style.width = "400px";
elForm.style.height = "500px";
elForm.style.padding = "30px";
elForm.style.borderRadius = "20px";
elForm.style.backgroundColor = "#fff";

formHeader.style.marginBottom = "35px";
formHeader.style.fontSize = "25px";
formHeader.style.textAlign = "center";

newResult.style.width = "400px";
newResult.style.height = "500px";
newResult.style.padding = "30px";
newResult.style.borderRadius = "20px";
newResult.style.backgroundColor = "dodgerblue";
newResult.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"

newResultHeader.style.marginBottom = "30px";
newResultHeader.style.fontSize = "25px";
newResultHeader.style.color = "#fff";
newResultHeader.style.textAlign = "center"

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

          // CSS STYLE
          // FORM__ITEM
          resultItem.style.borderRadius = "20px";
          resultItem.style.padding = "20px";
          resultItem.style.marginBottom = "15px";
          resultItem.style.backgroundColor = "#fff"
          resultItem.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";

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