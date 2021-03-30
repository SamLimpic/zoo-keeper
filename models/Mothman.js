class Mothman {
    constructor(
        nickname = 'Mothra',
        gender = '',
        height = 7,
        color = 'brown',
        hide = 'fur',
        eyes = 'red',
        frame = 'humanoid',
        limbs = ['antannae', 'wings'],
        head = 'moth-like',
        type = 'urban',
        img = './assets/mothman.png'
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
} export default Mothman;
