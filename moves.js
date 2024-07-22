var hinhanh = []
var j = 0
function loaded() {
    for (let i = 0; i < 5; i++) {
        hinhanh[i] = new Image();
        hinhanh[i].src = `Ex/anh${i}.webp`
    }
}
function found(prm) {
    switch (prm) {
        case 1:
            j = 0;
            break
        case 2:
            if (j > 0) {
                j--;
            }
            break
        case 3:
            if (j < hinhanh.length - 1) {
                j++
            }
            break
        case 4:
            j = hinhanh.length - 1
            break
    }
    document.getElementById("imgage").src = hinhanh[j].src;
    title();
}

function title() {
    k = j + 1
    document.getElementById("change").innerText = `${k}/${hinhanh.length}`
}

// a comment