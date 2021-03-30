import Alien from './models/Alien.js'
import Batsquatch from './models/Batsquatch.js'
import Chupacabra from './models/Chupacabra.js'
import DeathWorm from './models/DeathWorm.js'
import EnfieldMonster from './models/EnfieldMonster.js'
import FlatwoodsMonster from './models/FlatwoodsMonster.js'
import Globster from './models/Globster.js'
import Hellhound from './models/Hellhound.js'
import Inkanyamba from './models/Inkanyamba.js'
import JerseyDevil from './models/JerseyDevil.js'
import Kraken from './models/Kraken.js'
import LovelandFrogman from './models/LovelandFrogman.js'
import Mothman from './models/Mothman.js'
import Nessie from './models/Nessie.js'
import Ogopogo from './models/Ogopogo.js'
import PopeLickMonster from './models/PopeLickMonster.js'
import QueenslandTiger from './models/QueenslandTiger.js'
import Reptillian from './models/Reptillian.js'
import Sasquatch from './models/Sasquatch.js'
import Thunderbird from './models/Thunderbird.js'
import Umdhlebi from './models/Umdhlebi.js'
import VoranezhGiant from './models/VoranezhGiant.js'
import Wendigo from './models/Wendigo.js'
import XixiZhiYu from './models/XixiZhiYu.js'
import Yeti from './models/Yeti.js'
import Zaratan from './models/Zaratan.js'

//#region DECLARATIONS SECTION
let zoo = [
    new Alien('Ned', 'male', 2.5, 'grey'),
    new Batsquatch('Steven', 'male', 8, 'navy'),
    new Chupacabra('Angelica', 'female', 3.5, 'khaki'),
    new DeathWorm('Derek', 'male', 5, 'maroon'),
    new EnfieldMonster('Andy', 'male', 4.5, 'black'),
    new FlatwoodsMonster('Megan', 'female', 9, 'gunmetal'),
    new Globster('Blobfish', null, 1.5, 'pink'),
    new Hellhound('Cynthia', 'female', 4, 'ash'),
    new Inkanyamba('Spencer', 'male', 23, 'black'),
    new JerseyDevil('Deborah', 'female', 3.5, 'grey'),
    new Kraken('Karen', 400,),
    new LovelandFrogman('Phillip', 'male', 3.5, 'green'),
    new Mothman('Bill', 'male', 8, 'grey'),
    new Nessie('Nestle', 'male', 35, 'navy'),
    new Ogopogo("Ogden", 'male', 55, 'blue'),
    new PopeLickMonster('Baphamut', 'non-binary', 9, 'crimson'),
    new QueenslandTiger('Tony', 'male', 6, 'orange'),
    new Reptillian('Hillary', 'female', 5, 'green'),
    new Sasquatch('Samsquatch', 'male', 8, 'khaki'),
    new Thunderbird('Peter', 'male', 12, 'crimson'),
    new Umdhlebi("Treebeard"),
    new VoranezhGiant('Susan', 'female', 10, 'white'),
    new Wendigo('Hargoop', 'male', 6),
    new XixiZhiYu('Yue', 'female', 1, 'white'),
    new Yeti('Mel', 'male', 8,),
    new Zaratan('Ooguay', 'male', 400),
]

let dirt = []
let tank = []
let cage = []
let field = []
let alley = []
let containment = []
//#endregion

function drawDirt() {
    dirt = zoo.filter(cryptid => cryptid.type == 'sub-terranean')
    let dirtElement = document.getElementById("dirt")
    let dirtTemplate = ''
    dirt.forEach(cryptid => {
        dirtTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        dirtElement.innerHTML = dirtTemplate
    })
}

function drawTank() {
    tank = zoo.filter(cryptid => cryptid.type == 'aquatic')
    let tankElement = document.getElementById("tank")
    let tankTemplate = ''
    tank.forEach(cryptid => {
        tankTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        tankElement.innerHTML = tankTemplate
    })
}

function drawCage() {
    cage = zoo.filter(cryptid => cryptid.type == 'aerial')
    let cageElement = document.getElementById("cage")
    let cageTemplate = ''
    cage.forEach(cryptid => {
        cageTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        cageElement.innerHTML = cageTemplate
    })
}

function drawField() {
    field = zoo.filter(cryptid => cryptid.type == 'rural')
    let fieldElement = document.getElementById("field")
    let fieldTemplate = ''
    field.forEach(cryptid => {
        fieldTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        fieldElement.innerHTML = fieldTemplate
    })
}

function drawAlley() {
    alley = zoo.filter(cryptid => cryptid.type == 'urban')
    let alleyElement = document.getElementById("alley")
    let alleyTemplate = ''
    alley.forEach(cryptid => {
        alleyTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        alleyElement.innerHTML = alleyTemplate
    })
}

function drawContainment() {
    containment = zoo.filter(cryptid => cryptid.type == 'extra-terrestrial')
    let containmentElement = document.getElementById("containment")
    let containmentTemplate = ''
    containment.forEach(cryptid => {
        containmentTemplate += `
            <div class="col-3 card shadow p-2 m-3 text-center">
                <div>
                    <h3>${cryptid.nickname}</h3>
                    <img class="img-fluid p-3" src="${cryptid.img}" alt="">
                    <h4>${cryptid.constructor.name}</h4>
                </div>
            </div>
        `
        containmentElement.innerHTML = containmentTemplate
    })
}

function drawZoo() {
    drawDirt()
    drawTank()
    drawCage()
    drawField()
    drawAlley()
    drawContainment()
    console.log(dirt, tank, cage, field, alley, containment)
}
drawZoo()