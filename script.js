let div_2_templates = document.querySelector("#div_2_templates")

let template_1 = document.querySelector("#temp_1")
let template_2 = document.querySelector("#temp_2")
let template_3 = document.querySelector("#temp_3")
let template_4 = document.querySelector("#temp_4")
let template_5 = document.querySelector("#temp_5")
div_2_templates.innerHTML = template_1.innerHTML

let data = {
    personal_infos : {
        first_name : "",
        email: "",
        phone: ""
    },

    plan: {
        monthly: true,
        yearly: false,
        type: "arcade"
    },

    addons: {
        online: false,
        larger: false,
        customizable: false
    }
}

let btn_next = document.querySelector("#btn_next")
let btn_back = document.querySelector("#btn_back")
btn_back.setAttribute("hidden", true)           

let page = 1

btn_next.addEventListener("click", () => {
    console.log("next")
    if (page == 1){
        CanPage1GoPage2()
    }else if (page == 2){
        UpdatePage3()
        page += 1
    }else if(page == 3){
        UpdatePage4()
        page += 1
    }else if (page == 4){
        page += 1
        UpdatePageFinal()
    }
})

let btn_1 = document.querySelector("#btn_1")
let btn_2 = document.querySelector("#btn_2")
let btn_3 = document.querySelector("#btn_3")
let btn_4 = document.querySelector("#btn_4")

function CanPage1GoPage2(){
    let input_name = document.querySelector("#input_name")
    let input_email = document.querySelector("#input_email")
    let input_phone = document.querySelector("#input_phone")

    let p_red_name = document.querySelector("#p_red_name")
    let p_red_email = document.querySelector("#p_red_email")
    let p_red_phone = document.querySelector("#p_red_phone")

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
        data.personal_infos.first_name = input_name.value
        data.personal_infos.email = input_email.value
        data.personal_infos.phone = input_phone.value

        page += 1
        UpdatePage2()
    }
}

function UpdatePage1(){
    btn_back.setAttribute("hidden", true)

    btn_1.className = "btn_step_active"
    btn_2.className = "btn_step"

    div_2_templates.innerHTML = template_1.innerHTML
}

function UpdatePage2(){
    btn_1.className = "btn_step"
    btn_2.className = "btn_step_active"
    btn_3.className = "btn_step"
    btn_4.className = "btn_step"

    div_2_templates.innerHTML = template_2.innerHTML
    
    // Mise en fonction du btn go back
    btn_back.removeAttribute("hidden")
    btn_back.addEventListener("click", () => {
        if (page == 2){
            page = 1
            UpdatePage1()
        }else if(page == 3){
            page = 2
            UpdatePage2()
        }else if (page == 4){
            page = 3
            UpdatePage3()
        }

        console.log("back")
    })

    let arcade = document.querySelector("#arcade")
    let advanced = document.querySelector("#advanced")
    let pro = document.querySelector("#pro")

    let price1 = document.querySelector("#price1")
    let price2 = document.querySelector("#price2")
    let price3 = document.querySelector("#price3")
    let p_mfree1 = document.querySelector("#p_mfree1")
    let p_mfree2 = document.querySelector("#p_mfree2")
    let p_mfree3 = document.querySelector("#p_mfree3")

    let switch_my = document.querySelector("#switch")
    let monthly = true
    let yearly = false

    let p_monthly = document.querySelector("#p_monthly")
    let p_yearly = document.querySelector("#p_yearly")

    data.plan.monthly = true
    data.plan.yearly = false
    data.plan.type = "arcade"
    
    arcade.addEventListener("click", () => {
        arcade.style.backgroundColor = "hsl(217, 100%, 97%)"
        arcade.style.border = "0.03cm solid hsl(243, 100%, 62%)"
        advanced.style.backgroundColor = "white"
        advanced.style.border = "0.03cm solid hsl(229, 24%, 87%)"
        pro.style.backgroundColor = "white"
        pro.style.border = "0.03cm solid hsl(229, 24%, 87%)"

        data.plan.type = "arcade"
    })
    
    advanced.addEventListener("click", () => {
        arcade.style.backgroundColor = "white"
        arcade.style.border = "0.03cm solid hsl(229, 24%, 87%)"
        advanced.style.backgroundColor = "hsl(217, 100%, 97%)"
        advanced.style.border = "0.03cm solid hsl(243, 100%, 62%)"
        pro.style.backgroundColor = "white"
        pro.style.border = "0.03cm solid hsl(229, 24%, 87%)"

        data.plan.type = "advanced"
    })
    
    pro.addEventListener("click", () => {
        arcade.style.backgroundColor = "white"
        arcade.style.border = "0.03cm solid hsl(229, 24%, 87%)"
        advanced.style.backgroundColor = "white"
        advanced.style.border = "0.03cm solid hsl(229, 24%, 87%)"
        pro.style.backgroundColor = "hsl(217, 100%, 97%)"
        pro.style.border = "0.03cm solid hsl(243, 100%, 62%)"

        data.plan.type = "pro"
    })
    
    let one = 0
    switch_my.addEventListener("click", () => {
        one += 1
        
        if (monthly == true && yearly == false && one == 1){
            p_monthly.style.color = "hsl(231, 11%, 63%)"
            p_yearly.style.color = "hsl(213, 96%, 18%)"
    
            price1.textContent = "$90/yr"
            price2.textContent = "$120/yr"
            price3.textContent = "$150/yr"
            p_mfree1.textContent = "2 months free"
            p_mfree2.textContent = "2 months free"
            p_mfree3.textContent = "2 months free"

            data.plan.monthly = false
            data.plan.yearly = true
    
            yearly = true
            monthly = false
            one -= 2
        }else if (monthly == false && yearly == true && one == 1){
            p_monthly.style.color = "hsl(213, 96%, 18%)"
            p_yearly.style.color = "hsl(231, 11%, 63%)"
    
            price1.textContent = "$9/mo"
            price2.textContent = "$12/mo"
            price3.textContent = "$15/mo"
            p_mfree1.textContent = ""
            p_mfree2.textContent = ""
            p_mfree3.textContent = ""

            data.plan.monthly = true
            data.plan.yearly = false
    
            yearly = false
            monthly = true
            one -= 2
        }
    
    })
}

function UpdatePage3(){
    btn_2.className = "btn_step"
    btn_3.className = "btn_step_active"
    btn_4.className = "btn_step"

    div_2_templates.innerHTML = template_3.innerHTML
    console.log("page 3")

    if (data.plan.yearly == true){
        let p_price1_p3 = document.querySelector("#p_price1_p3")
        let p_price2_p3 = document.querySelector("#p_price2_p3")
        let p_price3_p3 = document.querySelector("#p_price3_p3")

        p_price1_p3.textContent = "+$10/yr"
        p_price2_p3.textContent = "+$20/yr"
        p_price3_p3.textContent = "+$20/yr"
    }


    let choice1_p3 = document.querySelector("#choice1_p3")
    let choice2_p3 = document.querySelector("#choice2_p3")
    let choice3_p3 = document.querySelector("#choice3_p3")
    let list_choice_p3 = [choice1_p3, choice2_p3, choice3_p3]

    data.addons.online = false
    data.addons.customizable = false
    data.addons.larger = false

    for (let g of list_choice_p3){

        g.firstElementChild.firstElementChild.addEventListener("change", () => {
            console.log("active")

            if (g.className == "choice_p3"){
                g.className = "choice_p3 choice_select"

                if (g.id == "choice1_p3"){
                    data.addons.online = true
                }else if (g.id == "choice2_p3"){
                    data.addons.larger = true
                }else if (g.id == "choice3_p3"){
                    data.addons.customizable = true
                }

            }else if (g.className == "choice_p3 choice_select"){
                g.className = "choice_p3"

                if (g.id == "choice1_p3"){
                    data.addons.online = false
                }else if (g.id == "choice2_p3"){
                    data.addons.larger = false
                }else if (g.id == "choice3_p3"){
                    data.addons.customizable = false
                }
            }
        })
    }
}

function UpdatePage4(){
    btn_3.className = "btn_step"
    btn_4.className = "btn_step_active"

    div_2_templates.innerHTML = template_4.innerHTML

    let btn_change_plan = document.querySelector("#btn_p_change")
    btn_change_plan.addEventListener("click", () => {
        page = 2
        UpdatePage2()
    })

    // Price final

    let price_final = 0

    // Yearly or Monthly

    let contrat = ""
    let p_contrat_info = document.querySelector("#p_contrat_info")
    console.log(p_contrat_info.textContent, data.plan.yearly)
    if (data.plan.monthly == true){
        contrat = "m"
        p_contrat_info.textContent = "(Monthly)"
    }else if (data.plan.yearly == true){
        contrat = "y"
        p_contrat_info.textContent = "(Yearly)"
    }

    // part 1 infos

    let plan_final = document.querySelector("#p_plan_final")
    let p_price_plan = document.querySelector("#p_total_price")
    if (data.plan.type == "arcade"){

        plan_final.textContent = "Arcade"
        price_final += 9
        if (contrat == "m"){
            p_price_plan.textContent = "+$9/mo"
        }else{
            p_price_plan.textContent = "+$90/yr"
        }


    }else if (data.plan.type == "advanced"){

        plan_final.textContent = "Advanced"
        price_final += 12
        if (contrat == "m"){
            p_price_plan.textContent = "+$12/mo"
        }else{
            p_price_plan.textContent = "+$120/yr"
        }

    }else if (data.plan.type == "pro"){

        plan_final.textContent = "Pro"
        price_final += 15
        if (contrat == "m"){
            p_price_plan.textContent = "+$15/mo"
        }else{
            p_price_plan.textContent = "+$150/yr"
        }
    }


    // Addons hidden && addons contrat

    let div_h1 = document.querySelector("#div_h1")
    let p1h1 = document.querySelector("#p1_h1")
    let p2h1 = document.querySelector("#p2_h1")

    let div_h2 = document.querySelector("#div_h2")
    let p1h2 = document.querySelector("#p1_h2")
    let p2h2 = document.querySelector("#p2_h2")

    let div_h3 = document.querySelector("#div_h3")
    let p1h3 = document.querySelector("#p1_h3")
    let p2h3 = document.querySelector("#p2_h3")

    //contrat
    if (contrat == "m"){
        p2h1.textContent = "+$1/mo"
        p2h2.textContent = "+$2/mo"
        p2h3.textContent = "+$2/mo"
    }else{
        p2h1.textContent = "+$10/yr"
        p2h2.textContent = "+$20/yr"
        p2h3.textContent = "+$20/yr"
    }

    // hidden
    if (data.addons.online == true){
        price_final += 1
        div_h1.removeAttribute("hidden")
        p1h1.removeAttribute("hidden")
        p2h1.removeAttribute("hidden")
    }else if (data.addons.online == false){
        div_h1.setAttribute("hidden", true)
        p1h1.setAttribute("hidden", true)
        p2h1.setAttribute("hidden", true)
    }

    if (data.addons.larger == true){
        price_final += 2
        div_h2.removeAttribute("hidden")
        p1h2.removeAttribute("hidden")
        p2h2.removeAttribute("hidden")
    }else if (data.addons.larger == false){
        div_h2.setAttribute("hidden", true)
        p1h2.setAttribute("hidden", true)
        p2h2.setAttribute("hidden", true)
    }

    if (data.addons.customizable == true){
        price_final += 2
        div_h3.removeAttribute("hidden")
        p1h3.removeAttribute("hidden")
        p2h3.removeAttribute("hidden")
    }else if (data.addons.customizable == false){
        div_h3.setAttribute("hidden", true)
        p1h3.setAttribute("hidden", true)
        p2h3.setAttribute("hidden", true)
    }


    // Price final

    let p_total_per = document.querySelector("#p_total_per")
    let p_price_final = document.querySelector("#p_price_final")

    if (contrat == "m"){
        p_total_per.textContent = "Total (per month)"
        p_price_final.textContent = `+$${price_final}/mo`
    }else if (contrat == "y") {
        p_total_per.textContent = "Total (per year)"
        p_price_final.textContent = `+$${price_final}0/yr`
    }

    // confirm

    btn_next.textContent = "Confirm"
    btn_next.id = "btn_confirm"
}


function UpdatePageFinal(){
    let div_2 = document.querySelector("#div_2")
    if (window.innerWidth > 374){
        div_2.innerHTML = template_5.innerHTML
    }else if (window.innerWidth <= 374){
        div_2_templates.innerHTML = template_5.innerHTML
    }
}