class Umdhlebi {
    constructor(
        name = 'Huorn',
        gender = '',
        height = 10,
        color = 'black',
        hide = 'bark',
        frame = 'willowy',
        limbs = ['branches', 'leaves', 'fruit', 'roots'],
        type = 'rural',
        img = './assets/umdhlebi.png'
    ) {
        this.name = name
        this.height = height
        this.color = color
        this.hide = hide
        this.frame = frame
        this.limbs = limbs
        this.type = type
        this.img = img
    }
}
export default Umdhlebi;
