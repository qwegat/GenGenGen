const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

const background = new Image()
background.src = "assets/base.png"
function drawcanvas(values) {
    ctx.drawImage(background,0,0)
    ctx.fillStyle = "#ffc429"
    ctx.fillRect(25, 1350, values[4].length*120+10, 30);

    ctx.font = "97px ltg"
    ctx.fillStyle = '#124aab';
    ctx.fillText('実は', 70, 155);
    ctx.fillText(values[0]+'後', 30, 360);
    ctx.fillText("時間が", 30+97*(2+values[0].length)+110*String(values[1].length), 360);
    ctx.fillText(values[3]+"は", 30, 1200);

    ctx.font = "75px ltg"
    ctx.fillText("にピッタリ！", 40+values[4].length*120, 1360);

    
    ctx.font = "140px ltg"
    ctx.fillText(values[2], 30, 550)
    ctx.strokeText(values[2], 30, 550)

    
    ctx.font = "120px ltg"
    ctx.fillText(values[4], 30, 1360);
    ctx.strokeText(values[4], 30, 1360)

    ctx.font = "190px sg"
    ctx.fillStyle = '#d25c45';
    ctx.fillText(values[1], 30+97*(1.5+values[0].length), 390);
}

function drawButton() {
    const values = []
    for (el of document.getElementsByClassName("inputel")) {
        values.push(el.value)
    }
    drawcanvas(values)
}


function resetP(){
    for (el of document.getElementsByClassName("inputel")) {
        el.value = el.placeholder
    }
}

window.addEventListener("load",function () {
    resetP()
    drawButton()
})

function download() {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png", 1); // PNGなら"image/png"
    a.download = "image.png";
    a.click();
}