class LovelandFrogman {
    constructor(
        nickname = 'Loveland',
        gender = '',
        height = 3,
        color = 'grey',
        hide = 'skin',
        eyes = 'black',
        frame = 'short',
        limbs = ['webbed'],
        head = 'frog-like',
        type = 'aquatic',
        img = './assets/loveland.png'
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
export default LovelandFrogman;
