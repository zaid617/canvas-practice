

    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "rgba(0,0,0)"

    let isMouseDown = false;

    document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
        isMouseDown = true;
    });
    document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
        isMouseDown = false;
    });

    document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {

        if (isMouseDown) {
            console.log("move: ", event);
            console.log("h: ", event.offsetX);
            console.log("w: ", event.offsetY);

            ctx.fillRect(
                event.offsetX,
                event.offsetY,
                5, 5
            );

        }

    });
