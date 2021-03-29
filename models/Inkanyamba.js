class Inkanyamba {
    constructor(
        name = 'Inky',
        gender = '',
        length = 20,
        color = 'black',
        hide = 'skin',
        eyes = 'black',
        frame = 'eel-like',
        limbs = ['fangs', 'tail'],
        head = 'horse-like',
        type = 'aquatic',
        img = './assets/inkanyamba.png'
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
export default Inkanyamba;
