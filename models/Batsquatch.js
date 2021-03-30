class Batsquatch {
    constructor(
        nickname = 'Batty',
        gender = '',
        height = 9,
        color = 'blue',
        hide = 'fur',
        eyes = 'yellow',
        frame = 'large',
        limbs = ['claws', 'fangs', 'talons', 'wings'],
        head = 'bat-like',
        type = 'aerial',
        img = './assets/batsquatch.png'
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
export default Batsquatch;
