let roastLevel=0
let destroyMode=false
let chatHistory=[]

function send(){

let input=document.getElementById("input")
let text=input.value.trim()

if(text==="") return

addMessage(text,"user")

chatHistory.push("User: "+text)

input.value=""

if(text.toLowerCase()=="destroy me"){
destroyMode=true
}

analyzeEmotion()

typingAnimation()

setTimeout(()=>{

let reply=generateRoast(text)

addMessage(reply,"bot")

chatHistory.push("AI: "+reply)

playSound()

updateAvatar()

},1700)

}

function addMessage(text,type){

let chat=document.getElementById("chat")

let msg=document.createElement("div")

msg.classList.add("message",type)

msg.innerText=text

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight

}

function typingAnimation(){

let chat=document.getElementById("chat")

let msg=document.createElement("div")

msg.classList.add("message","bot","typing")

msg.id="typing"

msg.innerText="Healing AI is analyzing..."

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight

setTimeout(()=>{

msg.remove()

},1500)

}

function analyzeEmotion(){

let meter=document.getElementById("meterFill")

let value=Math.floor(Math.random()*100)

meter.style.width=value+"%"

}

function playSound(){

let sound=document.getElementById("roastSound")

sound.currentTime=0

sound.play()

}

function updateAvatar(){

let avatar=document.getElementById("avatar")

let moods=["🙂","😐","😏","😈"]

avatar.innerText=moods[Math.floor(Math.random()*moods.length)]

}

function generateRoast(text){

roastLevel++

let roast=""

let savage=[

"Bhai tu banda kam aur system error zyada lagta hai.",

"Tera confidence trial version pe chal raha hai.",

"Google bhi tujhe search kare toh bolega 'no results found'.",

"Tere decisions dekh ke calculator bhi resign kar de.",

"Agar disappointment ek insaan hota toh tera clone hota."

]

let destroy=[

"Bhai honestly tu life ka side quest bhi fail kar dega.",

"Teri existence ek loading screen jaisi lagti hai.",

"Tujhe dekh ke lagta hai universe bhi kabhi kabhi galti karta hai.",

"Bhai tera logic itna weak hai ki calculator bhi emotional ho jaaye.",

"Tu banda nahi… warning label hai."

]

if(destroyMode){

roast=destroy[Math.floor(Math.random()*destroy.length)]

}

else{

roast=savage[Math.floor(Math.random()*savage.length)]

}

if(roastLevel>3){

roast+="  Aur haan… keyboard ko bhi rest de."

}

return roast

}

function downloadReport(){

let report="Psychological Roast Report\n\n"

chatHistory.forEach(line=>{
report+=line+"\n"
})

let blob=new Blob([report],{type:"text/plain"})

let link=document.createElement("a")

link.href=URL.createObjectURL(blob)

link.download="healing_ai_report.txt"

link.click()

}
