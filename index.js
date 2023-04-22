function renderColors(data){
    console.log(data)
    document.getElementById('color-one').style.backgroundColor = data.colors[0].hex.value
    document.getElementById('color-one-name').textContent = data.colors[0].hex.value

    document.getElementById('color-two').style.backgroundColor = data.colors[1].hex.value
    document.getElementById('color-two-name').textContent = data.colors[1].hex.value

    document.getElementById('color-three').style.backgroundColor = data.colors[2].hex.value
    document.getElementById('color-three-name').textContent = data.colors[2].hex.value

    document.getElementById('color-four').style.backgroundColor = data.colors[3].hex.value
    document.getElementById('color-four-name').textContent = data.colors[3].hex.value

    document.getElementById('color-five').style.backgroundColor = data.colors[4].hex.value
    document.getElementById('color-five-name').textContent = data.colors[4].hex.value

    document.getElementById('color-six').style.backgroundColor = data.colors[5].hex.value
    document.getElementById('color-six-name').textContent= data.colors[5].hex.value
}

document.querySelector('button').addEventListener('click',function(){
    getColors()
})


function getColors(){
    let seedColorHex = document.querySelector('input[type=color]').value
    let seedColor = seedColorHex.slice(1,seedColorHex.length)
    let mode = document.querySelector('select').value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(data => renderColors(data))
}

getColors()