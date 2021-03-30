class Reptillian {
    constructor(
        nickname = 'Tilly',
        gender = '',
        height = 7,
        color = 'green',
        hide = 'scales',
        eyes = 'yellow',
        frame = 'lanky',
        limbs = ['claws', 'fangs', 'tail'],
        head = 'lizard-like',
        type = 'sub-terranean',
        img = './assets/reptillian.png'
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
export default Reptillian;
