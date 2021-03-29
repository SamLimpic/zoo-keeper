class Globster {
    constructor(
        name = 'Globbs',
        gender = null,
        height = 2,
        color = 'grey',
        hide = 'flesh',
        frame = 'amorphous',
        type = 'aquatic',
        img = './assets/globster.png'
    ) {
        this.name = name
        this.height = height
        this.color = color
        this.hide = hide
        this.frame = frame
        this.type = type
        this.img = img
    }
}
export default Globster;