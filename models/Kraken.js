class Kraken {
    constructor(
        nickname = 'Kraw',
        gender = null,
        length = 300,
        color = 'grey',
        hide = 'hide',
        frame = 'squid-like',
        limbs = ['tentacles'],
        type = 'aquatic',
        img = './assets/kraken.png'
    ) {
        this.nickname = nickname
        this.length = length
        this.color = color
        this.hide = hide
        this.frame = frame
        this.limbs = limbs
        this.type = type
        this.img = img
    }
}
export default Kraken;
