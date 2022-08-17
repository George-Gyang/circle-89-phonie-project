function startApp() {
//     // Your entire app should not necessarily be coded inside this 
//     // single function (though there's no penalty for that), 
//     // so create and use/call additional functions from here
  
//     // pls remove the below and make some magic in here!
//   //   console.log('make magic in here!');
  
//   //   const header = document.querySelector('h2');
//   //   if(header) {
//   //     header.textContent = 'make some magic here!!';
//   //   }
//   // declaring the variables from the html page

// const verifyNumber = document.getElementById("confirm")
// const inputNumber = document.getElementById("number")
// const inputName = document.getElementById("name")
// const msgBox = document.getElementById("msgBox")


// // Getting the input from the form by preventing default submissing
// const numberConversion = function (e) {
//     e.preventDefault();
//     let customerName = inputName.value;
//     let customerNo = inputNumber.value;
//     const numberString = customerNo.toString().slice(0, 4);
//     // Applying the logic to dictate the network provider
//     // 0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903 and 0906
//     if (numberString == "0703" || numberString == "0704" || numberString == "0706" || numberString == "0803" || numberString == "0806" || numberString == "0810" || numberString == "0813" || numberString == "0814" || numberString == "0816" || numberString == "0903" || numberString == "0906") {
//         let textHolder = document.createElement("h2");
//         textHolder.innerText = customerName;
//         const mtnImg = document.createElement("IMG");
//         mtnImg.setAttribute("src", "https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png");
//         mtnImg.setAttribute("alt", "mtn logo");
//         let br = document.createElement("br")
//         msgBox.append(textHolder);
//         msgBox.append(mtnImg);
//         msgBox.append(br)
//         inputNumber.value = "";
//         inputName.value = "";
//     }

//     else if (numberString == "0705" || numberString == "0805" || numberString == "0807" || numberString == "0811" || numberString == "0815" || numberString == "0905") {
//         let textHolder = document.createElement("h2");
//         textHolder.innerText = customerName;
//         const gloImg = document.createElement("IMG");
//         gloImg.setAttribute("src", "https://i.pinimg.com/originals/6d/3b/84/6d3b84e3dde217e76502c6f89cf7d08b.png");
//         gloImg.setAttribute("alt", "glo logo");        
//         let br = document.createElement("br")
//         msgBox.append(textHolder);
//         msgBox.append(gloImg)
//         msgBox.append(br)
//         inputName.value = "";
//         inputNumber.value = "";
//     }

//     else if (numberString == "0701" || numberString == "0708" || numberString == "0802" || numberString == "0808" || numberString == "0812" || numberString == "0902" || numberString == "0904" || numberString == "0907") {
//         let textHolder = document.createElement("h2");
//         textHolder.innerText = customerName;
//         const airtelImg = document.createElement("IMG");
//         airtelImg.setAttribute("src", "https://logos-download.com/wp-content/uploads/2016/07/Airtel_logo_logotype_emblem.png");
//         airtelImg.setAttribute("alt", "airtel logo");        
//         let br = document.createElement("br")
//         msgBox.append(textHolder);
//         msgBox.append(airtelImg)
//         msgBox.append(br)
//         inputName.value = "";
//         inputNumber.value = "";
//     }

//     else if (numberString == "0809" || numberString == "0817" | numberString == "0818" || numberString == "0908" || numberString == "0909") {
//         let textHolder = document.createElement("h2");
//         textHolder.innerText = customerName;
//         const etisalatImg = document.createElement("IMG");
//         etisalatImg.setAttribute("src", "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png");
//         etisalatImg.setAttribute("alt", "airtel logo");        
//         let br = document.createElement("br")
//         msgBox.append(textHolder);
//         msgBox.append(etisalatImg)
//         msgBox.append(br)
//         inputName.value = "";
//         inputNumber.value = "";
//     } else {
//         let textHolder = document.createElement("h4");
//         textHolder.innerText = "INVALID ENTRY!!";
//         const verifiedMsg = msgBox.append(textHolder);
//         inputName.value = "";
//         inputNumber.value = "";
//     }
// }

// verifyNumber.addEventListener("submit", numberConversion)


// DOM Elements
let img = document.querySelector("#networkImg");
let networkDisplay = document.querySelector("#networkDisplay");
let numberBeginsWith = "";

// List of Networks
const services = [
 {
  name: "MTN",
  items: [
   "703",
   "706",
   "803",
   "806",
   "810",
   "813",
   "814",
   "816",
   "903",
   "906",
   "913",
  ],
 },
 {
  name: "Airtel",
  items: ["701", "708", "802", "808", "812", "902", "907", "901", "904", "912"],
 },
 {
  name: "GLO",
  items: ["705", "805", "807", "811", "815", "905"],
 },
 {
  name: "9Mobile",
  items: ["809", "817", "818", "908", "909"],
 },
];

// Checking if phone number matches any network when user types in the input
document.querySelector("#phoneNumber").addEventListener("keyup", () => {
 const phone = document.querySelector("#phoneNumber").value;
 const resetDOMElements = () => {
  img.classList.remove("active");
  numberBeginsWith = "";
  networkDisplay.innerHTML = "";
  networkDisplay.classList.remove("active");
 };
 if (phone.trim()[0] == "0") {
  if (phone.trim().length >= 5) {
   findNumber();
  } else {
   resetDOMElements();
  }
 } else if (phone.trim()[0] == "+") {
  if (phone.trim().length >= 7) {
   findNumber();
  } else {
   resetDOMElements();
  }
 } else if (phone.trim()[0] == "2") {
  if (phone.trim().length >= 6) {
   findNumber();
  } else {
   resetDOMElements();
  }
 }
});

// findNumber function finds the network provider of a number
const findNumber = () => {
 const phone = document.querySelector("#phoneNumber").value.trim();

 numberBeginsWith = "";
 let a = phone;
 let b = a[0] == "0" ? a.slice(1, 4) : a[0] == "+" ? a.slice(4, 7) : a;
 numberBeginsWith =
  a[0] == "0" ? "0" : a.slice(0, 4) == "+234" ? "+234" : a.slice(0, 4);
 let service = null;

 for (let i = 0; i < services.length; i++) {
  let a =
   services[i].items.filter((elem) => elem == b).length > 0 ? true : false;
  if (a) {
   service = services[i].name;
   break;
  }
 }

 const imgSrc = [
  "/img/MTN.png",
  "/img/AIRTEL.jpg",
  "/img/GLO.jpg",
  "/img/9MOBILE.png",
 ];

 img.src = "";

 if (service) {
  networkDisplay.innerHTML = "";
  if (service == "MTN") {
   img.src = imgSrc[0];
   img.classList.add("active");
   services[0].items.map((item) => {
    networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
   });
   networkDisplay.classList.add("active");
  } else if (service == "Airtel") {
   img.src = imgSrc[1];
   img.classList.add("active");
   services[1].items.map((item) => {
    networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
   });
   networkDisplay.classList.add("active");
  } else if (service == "GLO") {
   img.src = imgSrc[2];
   img.classList.add("active");
   services[2].items.map((item) => {
    networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
   });
   networkDisplay.classList.add("active");
  } else if (service == "9Mobile") {
   img.src = imgSrc[3];
   img.classList.add("active");
   services[3].items.map((item) => {
    networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
   });
   networkDisplay.classList.add("active");
  }
 }

 // Adding click event to the auto complete buttons
 document.querySelectorAll(".autocomplete").forEach((elem) => {
  elem.addEventListener("click", () => {
   document.querySelector("#phoneNumber").value = elem.textContent;
  });
 });
};

//Image slider
let i = 0;
let images = [
 "/img/img1.png",
 "/img/img2.jpeg",
 "/img/img6.jpg",
 "/img/img4.jpg",
 "/img/img3.jpg",
 "/img/img5.jpg",
];
const slider = () => {
 document.querySelector(
  ".bg-image-wrapper"
 ).style.backgroundImage = `url(${images[i]})`;
 document.querySelector(".bg-image-wrapper").style.opacity = "1";
 if (i < images.length - 1) {
  i++;
 } else {
  i = 0;
 }

 setTimeout(slider, 4500);
  
};

 window.load = slider()

}


  
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //