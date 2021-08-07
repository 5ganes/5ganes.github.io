class Duck {
    flying = false;
    quaking = false;
    xPos = 0;
    yPos = 0;
    constructor(flying, quaking, xPos, yPos) {
        this.flying = flying;
        this.quaking = quaking;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    takeOff = () => {
        this.flying = true;
    };
    land = () => {
        this.flying = false;
    };
    startQuacking = () => {
        this.quaking = true;
    };
    stopQuacking = () => {
        this.quaking = false;
    };
    moveTo = (x = this.xPos, y = this.yPos) => {
        this.xPos = x;
        this.yPos = y;
        console.log(`Duck is flying(${this.flying}) to ${this.xPos}, ${this.yPos} while quaking(${this.quaking})`);
    };
}

module.exports = Duck;

