import { GameRender } from "./gamerender.js";
import { GameLogic } from "./gamelogic.js";
import { Rect } from "./rect.js";


class mole
{
    constructor(Rect)
    {
        this.rect=rect;
        this.visible = false;
    }
}

class Game
{
    constructor()
    {
        this.logic = new GameLogic(this);
        this.render = new GameRender(this);
        this.player = new Rect(0, 0, 24, 24);
        this.score = 0;
        this.screen=0;
        this.nextMole = 0;
        this.gameOverTimer = 0;
        this.moles = [];
        let molestartx = 60;
        let molestarty = 20;

    
        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new Rect(molestartx+ (i*70),molestarty+20,50,50));
            this.moles.push(mole);
        }
        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new Rect(molestartx+ (i*70),molestarty+70,50,50));
            this.moles.push(mole);
        }
        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new Rect(molestartx+ (i*70),molestarty+140,50,50));
            this.moles.push(mole);
        }

        this.playerCurrentAnim = this.render.playerIdle;
        
        this.moleIdle = new Rect(1, 984, 984, 924);
    }

    init()
    {
        this.render.loadImages();
    }

    newGame()
    {
        this.score=0;
        this.screen=1;
        this.nextMole=1000;
        this.gameOverTimer = 60000;
    }

    startGame()
    {
        let scope = this;
        this.render.canvas.addEventListener("mousemove", function (event) 
        { 
            scope.logic.mouseMoved(event); 
        })
        
        this.render.canvas.addEventListener("click", function (event) 
        { 
            scope.logic.mouseClicked(event); 
        })

        setInterval(function () {scope.doGameFrame() },33);
    }

    doGameFrame()
    {
        this.logic.logic();
        this.render.render();
    }
}

let game = new Game()
game.init();