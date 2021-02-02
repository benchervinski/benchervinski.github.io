window.onload = function(){

  console.log('READY')

  var arrows = document.getElementsByClassName('arrow')

  setInterval(function() {
      Array.from(arrows).map(arrow => arrow.style.display = (arrow.style.display == 'none' ? '' : 'none'));
   }, 500);
};



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * max) + min;
// }

// let pageHeight = document.documentElement.clientHeight;
// let pageWidth = document.documentElement.clientWidth;
// let engine = Matter.Engine.create();

// let render = Matter.Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         height: pageHeight,
//         width: pageWidth,
//         hasBounds: true,
//         wireframes: false,
//         background: '#5afc03'
//     }
// })

// let ground = Matter.Bodies.rectangle(760, pageHeight - 60, pageWidth + 500, 20, {isStatic: true});

// let stack = Matter.Composites.stack(450, 100, 6, 6, 0, 0, (x, y) => {
//     let sides = Math.round(Matter.Common.random(2, 8));
//     return Matter.Bodies.polygon(x, y, sides, Matter.Common.random(20, 50), {
//         render: {
//             sprite: {
//                 texture: '/images/plastic_bottle.png',
//                 xScale:0.1,
//                 yScale: 0.1
//             }
//         }})
// })

// let mouse = Matter.Mouse.create(render.canvas);
// let mouseConstraint = Matter.MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//         render: { visible: false }
//     }
// })
// // render.mouse = mouse;
// Matter.World.add(engine.world, mouseConstraint);


// Matter.World.add(engine.world, [stack, ground, mouseConstraint]);
// Matter.Engine.run(engine);
// Matter.Render.run(render);

