// Transformando as dimenções em variaveis
var w = 1250
var h = 700

var config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() { 
    this.load.image('fundo' , 'Explosão Galactica.jpg');
    this.load.image('alien' ,  'Alien.png');
 }

function create() {
    this.add.image(w/2, h/2, 'fundo');

    //tamanho, oringem e escala do aliem
    //+aliem como variavel
    alien = this.add.image(w/2, h/2, 'alien').setOrigin(0.5, 0.5).setScale(0.4);
    alien.setFlip(true, false);

    }

function update() {
    // Fazendo o Alien seguir o mouse
    alien.x = this.input.x;
    alien.y = this.input.y;
   
    // Fazendo o aliem crescer de acordo com o plano cartesiano
alien.setScale(Math.abs(alien.y-h/2)/(h/1.5));
alien.setScale(Math.abs(alien.x-w/2)/(w/1.5));
    
}

