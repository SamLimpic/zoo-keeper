class VoranezhGiant {
    constructor(
        nickname = 'Voran',
        gender = '',
        height = 9,
        color = 'silver',
        hide = 'clothing',
        eyes = 'black',
        frame = 'humanoid',
        limbs = ['thick'],
        head = 'blunted',
        type = 'extra-terrestrial',
        img = './assets/voranezh.png'
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
export default VoranezhGiant;
