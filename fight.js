const domantas = {
    age: "17",
    nationality: "Lithuanian",
    weight: "120kg",
    height: "213cm",
    stance: "South-Paw",
    record: "W: 120 L: 1 D: 0"
}

function domantasprofile() {
    document.getElementById("title").innerText = 'Domantas'
    document.getElementById("stats").innerHTML = `<ul><li>Age: ${domantas.age}</li><li>Nationality: ${domantas.nationality}</li><li>Weight: ${domantas.weight}</li><li>Height: ${domantas.height}</li><li>Stance: ${domantas.stance}</li><li>Record: ${domantas.record}</li></ul>`
    document.getElementById("images").innerHTML = '<img src="images/dom.jpg" alt="">'
}
const daniels = {
    age: "16",
    nationality: "Latvian",
    weight: "3",
    height: "At least 3 chairs",
    stance: "West Paw",
    record: "W: 2 L: 17 D: Unknown"
}
function danielsprofile() {
    document.getElementById("title").innerText = 'Daniels'
    document.getElementById("stats").innerHTML = `<ul><li>Age: ${daniels.age}</li><li>Nationality: ${daniels.nationality}</li><li>Weight: ${daniels.weight}</li><li>Height: ${daniels.height}</li><li>Stance: ${daniels.stance}</li><li>Record: ${daniels.record}</li></ul>`
    document.getElementById("images").innerHTML = '<img class="dpic" src="https://lff.lv/comet/person/_resized/f40c2d7b639d0e2a5d86d356fb9adcd6196e6ca0_140_0.png">'
}
const alex = {
    age: "17",
    nationality: "Latvian",
    weight: "Half of a donkey and some water",
    height: "Half of a boxing ring",
    stance: "Karate",
    record: "W: 200 L:742 D:58"

}
function alexprofile() {
    document.getElementById("title").innerText = 'Kisik'
    document.getElementById("stats").innerHTML = `<ul><li>Age: ${alex.age}</li><li>Nationality: ${alex.nationality}</li><li>Weight: ${alex.weight}</li><li>Height: ${alex.height}</li><li>Stance: ${alex.stance}</li><li>Record: ${alex.record}</li></ul>`
    document.getElementById("images").innerHTML = '<img class="ap" src="https://www.sportdata.org/wkf/competitor_pics/49973.jpg">'
}
const matt = {
    age: "16",
    nationality: "French",
    weight: "A bucket of pears",
    height: "7 tennis balls",
    stance: "Confused",
    record: "W: 0 L: 1 D: 27"
}
function mattprofile() {
    document.getElementById("title").innerText = 'Maethieauie'
    document.getElementById("stats").innerHTML = `<ul><li>Age: ${matt.age}</li><li>Nationality: ${matt.nationality}</li><li>Weight: ${matt.weight}</li><li>Height: ${matt.height}</li><li>Stance: ${matt.stance}</li><li>Record: ${matt.record}</li></ul>`
    document.getElementById("images").innerHTML = '<img src="images/mathew.jpg" id="mp">'
}
const georg = {
    age: "17",
    nationality: "Latvian",
    weight: "A bag of rocks",
    height: "A chinese door",
    stance: "Orthodox",
    record: "W: 10 L: 10 D: 10"
}
function georgprofile() {
    document.getElementById("title").innerText = 'Georg'
    document.getElementById("stats").innerHTML = `<ul><li>Age: ${georg.age}</li><li>Nationality: ${georg.nationality}</li><li>Weight: ${georg.weight}</li><li>Height: ${georg.height}</li><li>Stance: ${georg.stance}</li><li>Record: ${georg.record}</li></ul>`
    document.getElementById("images").innerHTML = '<img class="gp" src="https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_.jpg">'

}
