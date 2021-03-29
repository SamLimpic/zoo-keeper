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

let dirtPile = []
let tank = []
let cage = []
let field = []
let alley = []
let containment = []
//#endregion

function fillDirt() {
    dirtPile = zoo.filter(cryptid => cryptid.type == 'sub-terranean')
}

function fillTank() {
    tank = zoo.filter(cryptid => cryptid.type == 'aquatic')
}

function fillCage() {
    cage = zoo.filter(cryptid => cryptid.type == 'aerial')
}

function fillField() {
    field = zoo.filter(cryptid => cryptid.type == 'rural')
}

function fillAlley() {
    alley = zoo.filter(cryptid => cryptid.type == 'urban')
}

function fillContainment() {
    containment = zoo.filter(cryptid => cryptid.type == 'extra-terrestrial')
}

function fillZoo() {
    fillDirt()
    fillTank()
    fillCage()
    fillField()
    fillAlley()
    fillContainment()
    console.log(dirtPile, tank, cage, field, alley, containment)
}

fillZoo()