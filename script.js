let $ = document

let inputElem = $.getElementById("text-to-search")
let searchBtm = $.getElementById("search")
let paragraph = $.getElementById("paragraph")

const searchTxt = () => {
    let inputValue = inputElem.value.trim()    
    let regexCode = new RegExp(inputValue, "gi")

    paragraph.innerHTML = paragraph.textContent.replace(regexCode,(txt) => `<mark>${txt}</mark>`)
    inputElem.value = ""
}

searchBtm.addEventListener("click", searchTxt)