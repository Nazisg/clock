let saat = document.getElementById("saat")
let time = new Date()
saat.innerText = (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
time = setInterval(() => {
    let time = new Date()
    saat.innerText= (time.getHours() + ":" + (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()) + ":" + (time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()))
    let str = '123456789abcdef'
    let reng="#"
    for(i=0; i<6; i++){
    reng+=str.charAt(Math.floor(Math.random()*str.length))
}
    saat.style.color=reng
    if(time.getSeconds()==0){
    document.body.style.backgroundColor=reng
    }
},1000)







// let input = document.getElementById("nameInp")
// let input1 = document.getElementById("nameInp1")
// let val = document.getElementById("val")

// input.addEventListener("keyup", () => {
//     // val.innerText = input.value
// })

// btn.addEventListener("click", () => {
//     if (input.value.length < 10 && input1.value.length > 5) {
//         val.innerText = "true"
//     } else {
//         val.innerText = "false"
//     }
// })