class Nessie {
    constructor(
        nickname = 'Nessie',
        gender = '',
        length = 30,
        color = 'blue',
        hide = 'hide',
        eyes = 'black',
        frame = 'long',
        limbs = ['fangs', 'flippers', 'tail'],
        head = 'snake-like',
        type = 'aquatic',
        img = './assets/nessie.png'
    ) {
        this.nickname = nickname
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
export default Nessie;
