class Yeti {
    constructor(
        name = 'Abe',
        gender = '',
        height = 10,
        color = 'red',
        hide = 'fur',
        eyes = 'yellow',
        frame = 'large',
        limbs = ['claws', 'fangs'],
        type = 'rural',
        img = './assets/yeti.png'
    ) {
        this.name = name
        this.gender = gender
        this.height = height
        this.color = color
        this.hide = hide
        this.eyes = eyes
        this.frame = frame
        this.limbs = limbs
        this.type = type
        this.img = img

    }
}
export default Yeti;
