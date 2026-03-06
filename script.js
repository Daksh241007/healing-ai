function roast(){

let text = document.getElementById("input").value.toLowerCase()

let roasts = [

"Bhai tu fine nahi hai, tu bas emotional buffering pe chal raha hai",

"Tere life ka progress bar abhi bhi 2% pe atka hua hai",

"Tu theek nahi hai bhai, tu bas system restart ka wait kar raha hai",

"Agar confusion ek insaan hota toh tera twin hota",

"Bhai tu problem nahi hai... tu pura software bug hai",

"Tera confidence bhi trial version pe chal raha hai",

"Life ne tujhe tutorial bhi nahi diya aur tu already fail ho gaya",

"Tu happy nahi hai bhai, tu bas temporarily delusional hai"

]

let random = roasts[Math.floor(Math.random()*roasts.length)]

document.getElementById("output").innerText = random

}
