console.log("canvas.render");


let canvas = document.getElementById("canvas");
// create the canvas context
const ctx = canvas.getContext("2d");

// // draw rectangles
// ctx.strokeStyle = "red";
// ctx.strokeRect(10, 10, 50, 50);


// draw text
// ctx.font = "30px Arial";
// ctx.fillStyle = "black";
// ctx.fillText("Fill Text",200,100);



const pts = [[50, 50], [100, 50], [100, 100], [200, 100], [300, 400],[200,300]];

const img = document.createElement("img")
img.setAttribute("src","https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60")

img.style.objectFit = "cover";
ctx.drawImage(img, 0, 0, 500, 500);


ctx.beginPath();

for (let idx = 0; idx < pts.length; idx++) {
    if(idx == 0) { 
        ctx.moveTo(pts[idx][0], pts[idx][1]);
    }
    else {
        ctx.lineTo(pts[idx][0], pts[idx][1]);
    }
}

ctx.closePath();
ctx.globalAlpha = 0.5
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.fill();

