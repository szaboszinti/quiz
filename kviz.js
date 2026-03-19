// let url = window.location.href
let urlSearch = window.location.search
console.log(urlSearch);
if (urlSearch.includes("?")){
    console.log(urlSearch);
    let kerdes = urlSearch.split("?")[1]
    // console.log("kerdes: ", kerdes)
    let kerdesparok = kerdes.split("&")
    console.log(kerdesparok);
    let fovaros = ""
    let vizeses = ""
    for(let i = 0; i <kerdesparok.length; i++){
        console.log(kerdesparok[i]);
        if(kerdesparok[i].startsWith("fovaros")){
            fovaros = kerdesparok[i].split("=")[1]
    }
    else if(kerdesparok[i].startsWith("vizeses")){
        vizeses = kerdesparok[i].split("=")[1]
    }
}
let latnivalo = []
let latnivaloSzoveg = ""
for(let i = 0; i < kerdesparok.length; i++){
    if(kerdesparok[i].startsWith("latnivalo")){
        latnivalo.push(kerdesparok[i].split("=")[1])
    }

}

let vizesesEredmenyw = document.getElementById("vizeses_eredmeny")
if(vizeses === "gullfoss"){
    vizesesEredmenyw.innerHTML = `<p style="color: green;">Helyes válasz!</p>`
} 
else{
    vizesesEredmenyw.innerHTML = `<p style="color: red;">Helytelen válasz!</p>`
}
latnivaloSzoveg = latnivalo.join(", ")
console.log(latnivalo)
console.log(latnivaloSzoveg);
    
    // let fovaros = kerdes.split("=")[1]
    // console.log(kerdes);
    // console.log(fovaros);

    let felhasznaloBevitelEredmeny = document.getElementById("felhasznaloi_input")
    felhasznaloBevitelEredmeny.innerHTML =   
      `  <h3>A felhasználó válasza</h3>
            <p>1. ${fovaros}</p>
            <p>2. ${vizeses}</p>
            <p>3. ${latnivaloSzoveg}</p>`
}


