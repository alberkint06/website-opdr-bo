class App
{
    runApplication()
    {
        console.log("hello world");
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();

let canvas = document.getElementById("js--canvasID");
console.log(canvas);

let g = canvas.getContext("2d");

g.beginPath();
g.rect(500, 20, 700, 700);
g.stroke();