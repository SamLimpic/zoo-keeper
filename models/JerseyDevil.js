class JerseyDevil {
    constructor(
        nickname = 'Jersey',
        gender = '',
        height = 4,
        color = 'black',
        hide = 'hide',
        eyes = 'black',
        frame = 'short',
        limbs = ['fangs', 'hooves', 'tail'],
        head = 'horse-like',
        type = 'urban',
        img = './assets/jersey.png'
    ) {
        this.nickname = nickname
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
export default JerseyDevil;
