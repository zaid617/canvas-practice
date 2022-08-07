let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 250;
canvas.height = window.innerHeight - 250;

let ctx = document.getElementById("myCanvas").getContext("2d");
ctx.fillStyle = "rgba(0,0,0)"

let isMouseDown = false;

document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
    isMouseDown = true;
});

document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
    isMouseDown = false;
    ctx.beginPath()
});

document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {

    if (isMouseDown) {
        console.log("move: ", event);
        console.log("h: ", event.offsetX);
        console.log("w: ", event.offsetY);

        ctx.lineTo(
            event.clientX - canvas.offsetLeft,
            event.clientY - canvas.offsetTop
          );
          
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.lineWidth = 10;
          ctx.stroke();
          return  

        }

    });

