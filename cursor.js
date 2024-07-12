const coords = { x: 0, y: 0 }
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
  circle.x = 0;
  circle.y = 0;
})

window.addEventListener("mousemove", function(event) {
  coords.x = event.clientX;
  coords.y = event.clientY;

  an_circle()
});

function an_circle(){

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function(circle , index){

    circle.style.left = x - 6 + 'px'
    circle.style.top = y - 6 + 'px'

    circle.style.scale = (circles.length - index) / circles.length ;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circle[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  })

  requestAnimationFrame(an_circle);
}

an_circle();