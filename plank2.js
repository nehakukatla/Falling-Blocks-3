class Plank2 {
    constructor(x, y) {
        var options = {
            friction: 3,
            restitution: 0.1
        }
        this.plank = Bodies.rectangle(x, y, 150, 70, options)
        this.width = 150;
        this.height = 70;
        World.add(world, this.plank);
    }

    //set random y position for rain drops
    //updateY() {
    //    if (this.plank.position.y > height) {

    //        Matter.Body.setPosition(this.plank, { x: random(75, 525), y: 0 })
    //    }
    // }

    //display drops
    showDrop() {
        fill("blue")
        rectMode(CENTER);
        rect(this.plank.position.x, this.plank.position.y, this.width, this.height);
    }
}
