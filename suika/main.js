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
    option: {
        wireframes: false,   //기본값은 true인데 true일 경 색 적용 x
        backgroun: '#F7F4C8',
        width: 620,
        height: 850,
    },
});