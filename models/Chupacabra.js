class Chupacabra {
    constructor(
        nickname = 'Chalupa',
        gender = '',
        height = 4,
        color = 'brown',
        hide = 'hide',
        eyes = 'black',
        frame = 'lanky',
        limbs = ['claws', 'fangs', 'spines'],
        type = 'rural',
        img = './assets/chupacabra.png'
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
export default Chupacabra;
