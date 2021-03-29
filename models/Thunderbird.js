class Thunderbird {
    constructor(
        name = 'Thundo',
        gender = '',
        length = 10,
        color = 'red',
        hide = 'feathers',
        eyes = 'yellow',
        frame = 'large',
        limbs = ['beak', 'talons', 'wings'],
        head = 'scaled',
        type = 'aerial',
        img = './assets/thunderbird.png'
    ) {
        this.name = name
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
export default Thunderbird;
