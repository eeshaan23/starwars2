class Satellite {
    constructor(){
       
        this.satellite = loadImage("satellite.png");
        this.satelliteGroup = new Group();;
     }
 
      spawnSatellite(){
         if(frameCount%180 === 0){
            var x = Math.round(random(50, 750));
             var body = createSprite(x,50,20, 30);
          body.velocityY = 4;
          body.addImage(this.satellite);
          body.scale = 0.5;
           body.lifetime = 125;
           this.satelliteGroup.add(body);
         }
         }
 }

