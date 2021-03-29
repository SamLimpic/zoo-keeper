class Sasquatch {
    constructor(
        name = 'Sassy',
        gender = '',
        height = 7,
        color = 'brown',
        hide = 'fur',
        eyes = 'brown',
        frame = 'large',
        limbs = ['claws', 'fangs'],
        type = 'rural',
        img = './assets/sasquatch.png'
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
export default Sasquatch;
