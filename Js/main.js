const btnMenu = document.getElementById("btn-menu");
const listMenu = document.getElementById("listMenu");
const searchOpp = document.getElementById("search-option");
const contOpp = document.getElementById("cont-opp-pro");
const formSearch = document.getElementById("form-search");
const contentSelectA = document.getElementById("content-select");
const contentSelectB = document.getElementById("content-select-two");
const selectA = document.getElementById("selectA");
const selectB = document.getElementById("selectB");
const searchProOpp = document.getElementById("cont-select-search");
const oppIcon = document.getElementById("oppIcon");

const inputSearchA = document.getElementById("input-search");
const searchInA = document.getElementById("search-in-a");
// const searchInB = document.getElementById("search-in-a");

// inputSearchA.addEventListener("click", (e) => {
//     e.stopPropagation()
//     contOpp.classList.remove("active");
//     contentSelectA.classList.remove("active");
//     contentSelectB.classList.remove("active");
//     searchProOpp.classList.remove("active");
//     formSearch.classList.remove("active");
//     searchOpp.classList.remove("active");
//     oppIcon.setAttribute("colors", "primary:#ffffff");
// })

// fetch('./Js/data.json')
// .then(response => {
//     return response.json();
// })
// .then(jsondata => {
//         inputSearchA.addEventListener("keyup", e => {
//             e.preventDefault()
//             getData(jsondata, e);
//         })
        
//         // contentSelectA.addEventListener("click", () => {
//         //     selectA.value;
//         // })
//         // myF(jsondata);
//         // selectA.addEventListener("change", () => {
//         //     myM(jsondata);
//         // })
//     }
// );


$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        console.log(this.scrollY)
        $('.header').addClass("sticky");
        $('.navigation').addClass("top-des");
        // $('.menu-btn').addClass("menu-btn-scroll");
        // $('#logo').attr("src", "./Recursos/LOGO-alpha.png");
    }else{
        $('.header').removeClass("sticky");
        $('.navigation').removeClass("top-des");
        // $('.menu-btn').removeClass("menu-btn-scroll");
        // $('#logo').attr("src", "./Recursos/LOGO-alpha-2.png");
    }
    
    // scroll-up button show/hide script
    // if(this.scrollY > 500){
    //     $('.scroll-up-btn').addClass("show");
    // }else{
    //     $('.scroll-up-btn').removeClass("show");
    // }
});



var time = 0;
btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    listMenu.classList.toggle("active");
})

// searchOpp.addEventListener("click", () => {
//     inputSearchA.value = "";
//     contOpp.classList.toggle("active");
    
//     if (contOpp.querySelector(".active")) {
//         oppIcon.setAttribute("colors", "primary:#ffffff");
//     } else {
//         oppIcon.setAttribute("colors", "primary:#000");
//     }

//     searchOpp.classList.toggle("active");
//     formSearch.classList.toggle("active");
    
//     if (contentSelectA.querySelector(".active")){
//         time = 1;
//     } else {
//         time = 500;
//     }
//     setTimeout(() => {
//         contentSelectA.classList.toggle("active");
//         contentSelectB.classList.toggle("active");
//         searchProOpp.classList.toggle("active");
//     },time)
// })

// selectA.addEventListener("mouseover", () => {
//     selectA.classList.toggle("activeA");
// })
// selectB.addEventListener("mouseover", () => {
//     selectB.classList.toggle("activeA");
// })
// selectA.addEventListener("mouseout", () => {
//     selectA.classList.remove("activeA");
// })
// selectB.addEventListener("mouseout", () => {
//     selectB.classList.remove("activeA");
// })

function getData(data, e){
    let result = [];
    let link = [];
    let string = e.target.value;
    let inputSearch = string.split(" ").join("");
    // console.log(inputSearch);

    for (let i = 0; i < data[0].cars.length; i++) {
        let nanmelg = data[0].cars[i].brand.trim().toLowerCase() + data[0].cars[i].model.trim().toLowerCase();
        let brandYear = data[0].cars[i].brand.trim().toLowerCase() + data[0].cars[i].year;
        
        let nanmelgYe = nanmelg + data[0].cars[i].year;

        let yearSh = data[0].cars[i].year + "";

        console.log(inputSearch.trim().toLowerCase());

        // Solo marca
        if(data[0].cars[i].brand.trim().toLowerCase().includes(inputSearch.trim().toLowerCase())){
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            

        // Marca y año
        } else if(brandYear.includes(inputSearch.trim().toLowerCase())){
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
            
        // Solo modelo
        } else if (data[0].cars[i].model.trim().toLowerCase().includes(inputSearch.trim().toLowerCase())) {
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
        
        // Marca y modelo
        } else if(nanmelg.trim().includes(inputSearch.trim().toLowerCase())) {
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
        
        // Solo año
        } else if (yearSh.includes(inputSearch.trim().toLowerCase())) {
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
        
        // Marca modelo y año
        } else if(nanmelgYe.trim().includes(inputSearch.trim().toLowerCase())) {
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
        
        //Cilindrada
        } else if (data[0].cars[i].displacement.trim().toLowerCase().includes(inputSearch.trim().toLowerCase())) {
            result.push(data[0].cars[i].brand + " " + data[0].cars[i].model + " " + data[0].cars[i].year);
            link.push("product.html?brand=" + data[0].cars[i].brand.trim().toLowerCase() + "&model=" + data[0].cars[i].model + "&year=" + data[0].cars[i].year);
            searchInA.href = "results.html?search=" + inputSearch.trim().toLowerCase();
            
        }
    }
    
    document.getElementById("results").innerHTML = ""
    
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            if (i<8) {

                let li = document.createElement("li");
                let id = "li-list-search-" + i
                li.id = id;

                let a = document.createElement("a");
                a.href = link[i];

                a.textContent = result[i];
                
                document.getElementById("results").appendChild(li);
                document.getElementById(`${id}`).appendChild(a);
            }
        }
    } else {
        let li = document.createElement("li");
        li.textContent = "No se encontraron resultados para: " + inputSearch;
        document.getElementById("results").appendChild(li);
        searchInA.href = "results.html?search=0";
    }
    if(inputSearch.trim() === "") {
        console.log(result.length);
        result = [];
        link = [];
        document.getElementById("results").textContent = "";
        searchInA.href = "results.html?search=0";
        
        if (!formSearch.querySelector(".active")) {
            formSearch.classList.remove("active");
            // searchOpp.classList.remove("active");
            // oppIcon.setAttribute("colors", "primary:#ffffff");
            // contentSelectA.classList.remove("active");
            // contentSelectB.classList.remove("active");
            // searchProOpp.classList.remove("active");
        }
    }
}

function myF(data) {
    var x = document.getElementById("selectA");
    let collected = [];
    for (let i = 0; i < data[0].cars.length; i++) {
        collected[i] = data[0].cars[i].brand;
    }
    const dataArr = new Set(collected);
    let result = [...dataArr];

    for (let index = 0; index < result.length; index++) {       
        var option = document.createElement("option");
        option.value = result[index];
        option.text = result[index];
        x.add(option);
    }
}

function myM(data) {
    var a = document.getElementById("selectA");
    var x = document.getElementById("selectB");
    x.innerHTML = '<option value="">Modelo: </option>';
    let selectModel = a.value;

    let collected = [];
    let value = [];
    
    for (let i = 0; i < data[0].cars.length; i++) {
        if (selectModel == data[0].cars[i].brand) {
            let modelSelect = data[0].cars[i].model;
            let valueSelect = data[0].cars[i].brand;
            collected.push(modelSelect);
            value.push(valueSelect);
        }
    }
    const dataArr = new Set(collected);
    let result = [...dataArr];
    for (let index = 0; index < result.length; index++) {       
        var option = document.createElement("option");
        option.text = result[index];
        option.value = result[index];
        x.add(option);
    }
} 

formSearch.addEventListener("submit", (event) => {
    event.preventDefault();
     let site = '../results.html?search=';
     let url = site + inputSearchA.value;
     window.location.replace(url);
})