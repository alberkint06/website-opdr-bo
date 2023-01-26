import { Rect } from "./rect.js";

export class GameRender
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.playerIdle = new Rect(1181, 72, 346, 329);
        this.playerBonk = new Rect(259, 137, 328, 345);

        this.moleIdle = new Rect(467, 78, 981, 924);
        this.moleHeap = new Rect(841, 529, 183, 168);
    }

    loadImages()
    {
        let sources = ["img/hammer.png", "img/mole.png"];
        let scope = this;

        let loaded = 0;
        for (let i = 0; i < sources.length; i++)
        {
            let img = new Image();


            img.onload = function () 
            { 
                loaded++;
                if (loaded == sources.length)
                {
                    scope.game.newGame();
                }
            };
            img.src = sources[i];

            this.images.push(img);
        }
    }

    renderSprite(img, clip,pos)
    {
        this.g.drawImage(img, 
            clip.x, clip.y, clip.w, clip.h, 
            pos.x, pos.y, pos.w, pos.h)
    }

    renderUI()
    {
        this.g.font = "30px Verdana";
        this.g.fillStyle = "#FFFFFF";
        this.g.fillText("Score: "+this.game.score, 40, 40);
    }

    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight);

        if(this.game.screen == 0)
        {
            this.renderStart(g);
        }
        else if (this.game.screen == 1)
        {
            this.renderIngame(g);
        }
        else
        {
            this.renderEnd(g);
        }

        this.renderEnd();

            this.renderUI;

            this.g.fillText("Game Over!" + this.game.score, 40, 140);

    renderStart(g)
    {
        for (var i = 0; i < this.game.moles/length; i++)
        {
            let mole = this.game.moles[i];

            this.renderSprite(this.images[0], this.moleHeap, mole.rect);
        }
        this.g.font = "30px Verdana";
        this.g.fillStyle = "#FFFFFF";
        this.g.fillText("Click to start!: " + this.game.score, 40, 40);
    }
    renderIngame()
    {

        for (var i = 0; i < this.game.moles/length; i++)
        {
            let mole = this.game.moles[i];

            this.renderSprite(this.images[0], this.moleHeap, mole.rect);
            if (mole.visible)
            {
                this.renderSprite(this.images[1], this.moleIdle, mole.rect);
            }
        }

        this.renderSprite(this.images[0], this.playerCurrentAnim, this.game.player);

        this.renderUI();
    }
}
}
