const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resizer", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index){
  var data = '
  ./male001.png
  ./male002.png
  '
  // TODO: fill data of image later on
  return data.split("\n")[index];
}

const frameCount=300;

const images =[];
const imageSeq={
  frame: 1,
};

for(let i=0; i< frameCount; i++){
  const img= new Image();
  img.src=files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount-1,
  snap: "frame",
  ease: 'none',
  scrollTrigger: {
    scrub: 0.15,
    trigger: #page>canvas,
    start: 'top top',
    end: '600% top',
    scroller: '#main'
  },
  onUpdate: render,
});

images[1.].onload= render;

function render(){
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx){
  var canvas = ctx.canvas;
  var hRatio=canvas.width / img.width;
  var vRatio=canvas.height / img.height;
  var ratio=Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio)/2;
  var centerShift_y = (canvas.height - img.height * ratio)/2;
  ctx.clearReact(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

scrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  markers: true,
  scroller: '#main',
  start: 'top top',
  end: '600% top'
});

gsap.to("#page", {
  scrollTrigger: {
    trigger: "#page",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});

gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});

gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scroller: "#main",
  },
});
