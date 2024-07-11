let div_2 = document.querySelector("#div_2")

let template_1 = document.querySelector("#temp_1")
//div_2.innerHTML = template_1.innerHTML <------- A REMTTRE POUR QUE LE SCRIPT FONCTIONNE

let input_name = document.querySelector("#input_name")
let input_email = document.querySelector("#input_email")
let input_phone = document.querySelector("#input_phone")

let p_red_name = document.querySelector("#p_red_name")
let p_red_email = document.querySelector("#p_red_email")
let p_red_phone = document.querySelector("#p_red_phone")

let btn_next = document.querySelector("#btn_next")

let page = 1

btn_next.addEventListener("click", () => {
    if (page == 1){
        if (input_name.value == ""){
            input_name.style.border = "2px solid hsl(354, 84%, 57%)"
            p_red_name.removeAttribute("hidden")
        }else{
            input_name.style.border = "1px solid hsl(229, 24%, 87%)"
            p_red_name.setAttribute("hidden", true)
        }
    
        if (!input_email.value.includes("@", ".")){
            input_email.style.border = "2px solid hsl(354, 84%, 57%)"
            p_red_email.removeAttribute("hidden")
        }else{
            input_email.style.border = "1px solid hsl(229, 24%, 87%)"
            p_red_email.setAttribute("hidden", true)
        }
        
        if (input_phone.value.length < 10 || (!input_phone.value.includes("1") && !input_phone.value.includes("2") && !input_phone.value.includes("3") && !input_phone.value.includes("4") && !input_phone.value.includes("5") && !input_phone.value.includes("6") && !input_phone.value.includes("7") && !input_phone.value.includes("8") && !input_phone.value.includes("9") && !input_phone.value.includes("0"))){
            input_phone.style.border = "2px solid hsl(354, 84%, 57%)"
            p_red_phone.removeAttribute("hidden")
        }else{
            input_phone.style.border = "1px solid hsl(229, 24%, 87%)"
            p_red_phone.setAttribute("hidden", true)
        }
    
    
        if ((!input_name.value == "") && (input_email.value.includes("@", ".") && (input_phone.value.length >= 10 || (input_phone.value.includes("1") || input_phone.value.includes("2") || input_phone.value.includes("3") || input_phone.value.includes("4") || input_phone.value.includes("5") || input_phone.value.includes("6") || input_phone.value.includes("7") || input_phone.value.includes("8") || input_phone.value.includes("9") || input_phone.value.includes("0") )))){
            page += 1
            UpdatePage2()
        }
    }
})

let btn_1 = document.querySelector("#btn_1")
let btn_2 = document.querySelector("#btn_2")
let btn_3 = document.querySelector("#btn_3")
let btn_4 = document.querySelector("#btn_4")

function UpdatePage1(){

}

function UpdatePage2(){
    btn_1.className = "btn_step"
    btn_2.className = "btn_step_active"

    div_2.innerHTML = ""


}