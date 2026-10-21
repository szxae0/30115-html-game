// fruits.js에 있는 fruits 변수를 가져온다.
import { FRUITS } from "/suika/fruits.js"

// 모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

//엔진 선언
const engine = Engine.create();

//렌더(배경) 선언
const render = Render.create({
    engine,
    //어디에 그릴 것 인지 -> body 생성
    element: document.body,
    options: {
        wireframes: false,   //기본값은 true인데 true일 경 색 적용 x
        background: '#F7F4C8',  //배경 색 지정
        width: 620,
        height: 850,
    },
});

// 벽 배치를 위한 world
const world = engine.world;

//왼쪽 벽
const leftwall = Bodies.rectangle(15, 395, 30, 790, {
    isStatic: true,
    render: { fillStyle: '#E6B143'}
});

//오른쪽 벽
const rightwall = Bodies.rectangle(605, 395, 30, 790, {
    isStatic: true,
    render: { fillStyle: '#E6B143'}
});

//아래쪽 벽
const ground = Bodies.rectangle(310, 820, 620, 60, {
    isStatic: true,
    render: { fillStyle: '#E6B143'}
});

//위쪽 벽
const topLine = Bodies.rectangle(310, 150, 620, 2, {
    isStatic: true,
    isSensor: true, // 충돌판정을 끄고, 충돌 감지만 함
    render: { fillStyle: '#E6B143'}
});

//벽 배치
World.add(world, [leftwall, rightwall, ground, topLine]);

Render.run(render);
Runner.run(engine);

//현재 과일값을 저장할 수 있는 변수
let currentBody = null;
let currentFruit = null;

// 과일 떨어지는 함수
function addFruit() {
    const index = Math.floor(math.random() * 5);
    const fruit = FRUITS[index];

    const body = Bodies.circle(300, 50, fruit.radius, {
        index: index,   // 인덱스 값 저장
        isSleeping : true, // 시작시 바로 떨어지는게 아니라 멈춤 상태
        render: {
            sprite: { texture: `${fruit.name}.png`},
        },
        restitution: 0.5, 
    })

    // 현재 과일 값을 저장
    currentBody = boddy
    currentFruit =  fruit;

    // 월드에 추가
    World.add(world, body)
}
addFruit();