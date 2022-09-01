
const colorTagBg = document.getElementById("background-color-tag")
const colorTagDiv = document.getElementById("div-color-tag")
const changeBtn = document.getElementById("change-btn")
const toggleAllBtn = document.getElementById("toggle-all")
const toggleDivBtn = document.getElementById("toggle-div")
const toggleBackgroundBtn = document.getElementById("toggle-background")
const innerDiv = document.getElementById("inner")
const hexTag = document.getElementById("hex")
const rgbTag = document.getElementById("rgb")
const basicTag = document.getElementById("basic")



let changeAll = true
let changeDiv = false
let changeBackground = false
let changeHex = true
let changeRgb = false
let changeBasic = false

const hexArr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
const basicArr = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]

function randomBasicColor() {
    let newColor = ""
    newColor = basicArr[Math.floor(Math.random() * basicArr.length)]
    if (changeAll) {
    colorTagBg.textContent = "Background-Color" + " " + newColor
    document.body.style.backgroundColor = `${newColor}`
    colorTagDiv.textContent = "Div-Color" + " " + newColor
    innerDiv.style.backgroundColor = `${newColor}`
    } else if (changeDiv) {
        colorTagDiv.textContent = "Div-Color" + " " + newColor
        innerDiv.style.backgroundColor = `${newColor}`
    } else if (changeBackground) {
        colorTagBg.textContent = "Background-Color" + " " + newColor
        document.body.style.backgroundColor = `${newColor}`
    }
}

function randomHexColor() {
    let newColor = "#"
    for (let i = 0; i < 6; i++) {
   let num = hexArr[Math.floor(Math.random() * hexArr.length)]
    newColor += num
    } 
    if (changeAll) {
    colorTagBg.textContent = "Background-Color" + newColor
    document.body.style.backgroundColor = `${newColor}`
    colorTagDiv.textContent = "Div-Color" + newColor
    innerDiv.style.backgroundColor = `${newColor}`
    } else if (changeDiv) {
        colorTagDiv.textContent = "Div-Color" + newColor
        innerDiv.style.backgroundColor = `${newColor}`
    } else if (changeBackground) {
        colorTagBg.textContent = "Background-Color" + newColor
        document.body.style.backgroundColor = `${newColor}`
    }
}

function randomRgbColor() {
    let newColor = []
    for ( let i = 0; i < 3; i++ ) {
        let num = Math.floor( Math.random()*256 )
        newColor.push(num)
    } 
    if (changeAll) {
    colorTagBg.textContent = `Background-Color rgb(${newColor.join(",")})`
    document.body.style.backgroundColor = `rgb(${newColor.join(",")})`
    colorTagDiv.textContent = `Div-Color rgb(${newColor.join(",")})`
    innerDiv.style.backgroundColor = `rgb(${newColor.join(",")})`
    } else if (changeDiv) {
        colorTagDiv.textContent = `Div-Color rgb(${newColor.join(",")})`
        innerDiv.style.backgroundColor = `rgb(${newColor.join(",")})`
    } else if (changeBackground) {
        colorTagBg.textContent = `Background-Color rgb(${newColor.join(",")})`
        document.body.style.backgroundColor = `rgb(${newColor.join(",")})`
    }

}



changeBtn.addEventListener("click", function(){
    if (changeHex) {
    randomHexColor()
    } else if (changeRgb) {
    randomRgbColor()
    } else if (changeBasic) {
    randomBasicColor()
    }
})

toggleAllBtn.addEventListener("click",function(){
    toggleAll()
})
toggleDivBtn.addEventListener("click",function(){
    toggleDiv()
})
toggleBackgroundBtn.addEventListener("click",function(){
    toggleBackground()
})
function toggleAll() {
    toggleAllBtn.className = "toggleOn"
    toggleDivBtn.className = "toggleOff"
    toggleBackgroundBtn.className = "toggleOff"
    changeAll = true
    changeDiv = false
    changeBackground = false
}
function toggleDiv() {
    toggleAllBtn.className = "toggleOff"
    toggleDivBtn.className = "toggleOn"
    toggleBackgroundBtn.className = "toggleOff"
    changeAll = false
    changeDiv = true
    changeBackground = false
}
function toggleBackground() {
    toggleAllBtn.className = "toggleOff"
    toggleDivBtn.className = "toggleOff"
    toggleBackgroundBtn.className = "toggleOn"
    changeAll = false
    changeDiv = false
    changeBackground = true
}
hexTag.addEventListener("click", () => {
    hexTag.className = "active"
    rgbTag.className = ""
    basicTag.className = ""
    changeHex = true
    changeRgb = false
    changeBasic = false
})
rgbTag.addEventListener("click", () => {
    hexTag.className = ""
    rgbTag.className = "active"
    basicTag.className = ""
    changeHex = false
    changeRgb = true
    changeBasic = false
})
basicTag.addEventListener("click", () => {
    hexTag.className = ""
    rgbTag.className = ""
    basicTag.className = "active"
    changeHex = false
    changeRgb = false
    changeBasic = true
})