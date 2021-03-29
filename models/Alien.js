class Alien {
    constructor(
        name = 'Grey',
        gender = '',
        height = 3,
        color = 'grey',
        hide = 'skin',
        eyes = 'black',
        frame = 'skinny',
        limbs = ['arms', 'legs'],
        head = 'large',
        type = 'extra-terrestrial',
        img = './assets/alien.png'
    ) {
        this.name = name
        this.gender = gender
        this.height = height
        this.color = color
        this.hide = hide
        this.eyes = eyes
        this.frame = frame
        this.limbs = limbs
        this.head = head
        this.type = type
        this.img = img
    }
}

export default Alien;