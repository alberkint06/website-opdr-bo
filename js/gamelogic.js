import { circlesCollide, overlaps } from "./collisionmath.js";


export class GameLogic
{
    constructor(game)
    {
        this.game = game;

    }

    mouseMoved(event)
    {
        if (this.game.screen != 1)
        {
            return;
    }
    
    
    
        let factor = this.game.render.canvas.width / this.game.render.canvas.cientWidth;


        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
    }

    mouseClicked(event)
    {
        if (this.game.screen == 0)
        {
            this.game.newGame();
            return;
        }
        if (this.game.screen == 2)
        {
            this.game.screen=0;
            return;
        }
        let factor = this.game.render.canvas.width / this.game.render.canvas.cientWidth;


        this.game.player.x = event.offsetX * factor;
        this.game.player.y = event.offsetY * factor;
        let hitI = this.getHitMole();
        if (this.hitI != -1)
        {
            let mole = this.game.moles[hitI];
            this.game.score++;
            mole.visible=false;
        }
    }
    getHitMole()
    {
        let game = this.game;

        for (var i = 0; i < game.moles.lenght; i++)
        {
            let mole = game.moles[i];
            if (mole.visible)
            {
                if(circlesCollide(game.player, mole.rect))
                {
                    return i;
                }

            }
        }
        return -1;
    }
    spawnMole()
    {
        for (var i = 0; i < this.game.moles/length; i++)
        {
            let mole = this.game.moles[i];
            mole.visible = false;
        }

        let count = 1 + Math.floor(Math.random() * 4);
        for (var i = 0; i < count; i++)
        {
            let moleI = Math.floor(Math.random() * this.game.moles.lenght);

            let mole = this.game.moles[meloI];
            mole.visible = true;
        }
        this.game.nextMole = 1000;
    }

    logic()
    {
        let game = this.game;

        if (this.game.screen == 1)
        {

        
            if (this.game.gameOverTimer <= 0)
            {
                this.game.screen = 2;
                return;
            }
            this.game.gameOverTimer -= 33;
            this.game.nextMole -= 33;
            if(this.game.nextMole <= 0)
            {
                this.spawnMole();
            }

        
            game.playerCurrentAnim = game.render.playerIdle;

            if (this.getHitMole() != -1)
            {
                game.playerCurrentAnim = game.render.playerBonk;
            }

        }
    }
}