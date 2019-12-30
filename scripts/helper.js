function buttonFade() {

}

function buttonShow() {

}

var links = {
  introToUnity: "https://cupertino-gdc.github.io",
  introToC: "https://cupertino-gdc.github.io",
  APIsGameObjectsMonobehavior: "https://cupertino-gdc.github.io",
  UserInput: "https://cupertino-gdc.github.io",
  Vectors: "https://cupertino-gdc.github.io",
  Animators: "https://cupertino-gdc.github.io",
  Physics: "https://cupertino-gdc.github.io",
  UISceneManager: "https://cupertino-gdc.github.io",
  LightsnEffects: "https://cupertino-gdc.github.io",
  sculpting: "https://docs.google.com/presentation/d/e/2PACX-1vTszCzRxCCJ7-JTpbHpUVSvTYJ7MID24PBhwvgY2M0qYkUF0BscYGzGl6rxn7wKkC-ap0IeWNQTRBUX/pub?start=false&loop=false&delayms=3000",
  painting: "https://docs.google.com/presentation/d/e/2PACX-1vRets4WF_lfCmrv00ZxLr08_8FlH2ZUxeCDEvc7sRhf7QqZaVWcZ6H1GGwNJWfurpKTkgN7p8kp9c5S/pub?start=false&loop=false&delayms=3000",
  animating: "https://docs.google.com/presentation/d/e/2PACX-1vQr_ZzfxG3d6MIjXhmTKX3Gnx6B9aErdo4dJb9MM09-utsWHyMJOgQX9zf7-h9xHOBnRB6Eb3goEYna/pub?start=false&loop=false&delayms=3000"

}

function openLesson(lessonName) {
  if (links.hasOwnProperty(lessonName)) {
    window.open(links[lessonName]);
  } else
  {
    console.log("Lesson does not exist");
  }
}

function sendMail(message){

}
