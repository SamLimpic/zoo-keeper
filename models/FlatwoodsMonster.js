class FlatwoodsMonster {
    constructor(
        name = 'Flatwood',
        gender = '',
        height = 10,
        color = 'black',
        hide = 'metallic',
        eyes = 'orange',
        frame = 'large',
        limbs = ['arms', 'legs'],
        head = 'spade-like',
        type = 'extra-terrestrial',
        img = './assets/flatwoods.png'
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
export default FlatwoodsMonster;
