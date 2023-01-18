class App
{
    runApplication()
    {
    }
}

let app = new App();
app.runApplication();

let canvas = document.getElementById("js--canvasID");
console.log(canvas);

let g = canvas.getContext("2d");


//bg brown
g.beginPath();
g.fillStyle = "#964B00";
g.rect(500, 20, 720, 720);
g.closePath();
g.stroke();
g.fill();

//hole0 top left
g.beginPath();
g.fillStyle = "#483C32";
g.rect(530, 50, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole1 top middle
g.beginPath();
g.fillStyle = "#483C32";
g.rect(760, 50, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole2 top right
g.beginPath();
g.fillStyle = "#483C32";
g.rect(990, 50, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole3 middle left
g.beginPath();
g.fillStyle = "#483C32";
g.rect(530, 280, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole4 middle
g.beginPath();
g.fillStyle = "#483C32";
g.rect(760, 280, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole5 middle right
g.beginPath();
g.fillStyle = "#483C32";
g.rect(990, 280, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole6 bottom left
g.beginPath();
g.fillStyle = "#483C32";
g.rect(530, 510, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole7 bottom middle
g.beginPath();
g.fillStyle = "#483C32";
g.rect(760, 510, 200, 200);
g.closePath();
g.stroke();
g.fill();

//hole8 bottom right
g.beginPath();
g.fillStyle = "#483C32";
g.rect(990, 510, 200, 200);
g.closePath();
g.stroke();
g.fill();