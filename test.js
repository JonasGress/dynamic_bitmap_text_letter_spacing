var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);


function preload()
{
    this.load.bitmapFont('dosis', 'dosisSemiboldStroke.png', 'dosisSemiboldStroke.xml');
}

function create()
{
    var dynamicText = this.add.dynamicBitmapText(400, 100, 'dosis', 'Fall');
    var normalText = this.add.bitmapText(400, 200, 'dosis', "Fall");
}