class Hellhound {
    constructor(
        name = 'Cerberus',
        gender = '',
        height = 5,
        color = 'black',
        hide = 'fur',
        eyes = 'red',
        frame = 'maned',
        limbs = ['claws', 'fangs', 'tail'],
        head = 'canine',
        type = 'rural',
        img = './assets/hellhound.png'
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
export default Hellhound;
