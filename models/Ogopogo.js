class Ogopogo {
    constructor(
        name = 'Pogo',
        gender = '',
        length = 50,
        color = 'grey',
        hide = 'skin',
        eyes = 'yellow',
        frame = 'sleek',
        limbs = ['fangs', 'tail'],
        head = 'snake-like',
        type = 'aquatic',
        img = './assets/ogopogo.png'
    ) {
        this.name = name
        this.gender = gender
        this.length = length
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
export default Ogopogo;
