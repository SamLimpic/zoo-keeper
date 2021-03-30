class EnfieldMonster {
    constructor(
        nickname = 'Enfield',
        gender = '',
        height = 4,
        color = 'grey',
        hide = 'hide',
        eyes = 'red',
        frame = 'short',
        limbs = ['arms', 'legs'],
        type = 'urban',
        img = './assets/enfield.png'
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
export default EnfieldMonster;
