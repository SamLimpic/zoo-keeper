class Wendigo {
    constructor(
        nickname = 'Wendy',
        gender = '',
        height = 7,
        color = 'grey',
        hide = 'skin',
        eyes = 'sunken',
        frame = 'lanky',
        limbs = ['claws', 'fangs', 'tongue'],
        type = 'rural',
        img = './assets/wendigo.png'
    ) {
        this.nickname = nickname
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
export default Wendigo;
