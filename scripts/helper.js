var links = {
  introToUnity: "https://docs.google.com/presentation/d/e/2PACX-1vTpk2lW0ds_14KaP7y4eZeCRWl3p0OLnSZ-B1DaEuFjNZz1EVMvd5DuqhCBwxprsyCupuh_4tHQOE-z/pub?start=false&loop=false&delayms=3000",
  introToC: "https://docs.google.com/presentation/d/e/2PACX-1vSjnHI3hoFsXnkEmZAWfEIm5m4xsjJrvi7uv1XIb9GwpI9tW6GfYmD5jKjp-L5A14TmtGhDrzLbc-aL/pub?start=false&loop=false&delayms=3000",
  APIsGameObjectsMonobehavior: "https://docs.google.com/presentation/d/e/2PACX-1vSOWu2Pfcx6GxxVT9D-KYBxQeY9XgE9ltgpuQ3OaX6kcYwiXyhpHYVVA5V-DjHc487QtHaOOwkj0CQU/pub?start=false&loop=false&delayms=3000",
  UserInput: "https://docs.google.com/presentation/d/e/2PACX-1vQ8te8x2g_wRK6PqAfI9Cd1YpDqIqixnJffCEhGRpeFh-WveG9KGmzvB_GmgdB6rMrLEHGQwQPfe8iR/pub?start=false&loop=false&delayms=3000",
  Vectors: "https://docs.google.com/presentation/d/e/2PACX-1vSzpBBSNmk8FI1g-lgyaTSZf-RLaii2szyxlcv3_IubPSCoCArY-Y3KU24se0wxG0wWkrP-rj8TP8Dw/pub?start=false&loop=false&delayms=3000",
  Animator: "https://docs.google.com/presentation/d/e/2PACX-1vRYsQ8c7fcGUvh0BEXbyGcb9yaTZvF9cfMbIFldOZqSLhSaNKAythwMPdIqqSZiD5C5OlO7vSW57eQo/pub?start=false&loop=false&delayms=3000",
  Physics: "https://docs.google.com/presentation/d/e/2PACX-1vT-I00Alxti7bAKhmaZp8GnZIj98hoi-QsbUtTzhk_HTAXBucd-GmljPL4jwx3ifMieJLxI_pyXwlGY/pub?start=false&loop=false&delayms=3000",
  UISceneManager: "https://docs.google.com/presentation/d/e/2PACX-1vSgIjLRiUzCcVhH4S2p9CH_drquCnIi2qY2WEQmjqvHWzOaAzTZv7GtNtMbx6hd_huS5z12c28_OhUS/pub?start=false&loop=false&delayms=3000",
  LightsnEffects: "https://docs.google.com/presentation/d/e/2PACX-1vRDZTdxpBfdygxusDLloaQhFJgP1zOF33HRBXki95l0Go5LIur7jPVq4DtBGj0RtRx21Jhs4ae4YOhx/pub?start=false&loop=false&delayms=3000",
  sculpting: "https://docs.google.com/presentation/d/e/2PACX-1vTszCzRxCCJ7-JTpbHpUVSvTYJ7MID24PBhwvgY2M0qYkUF0BscYGzGl6rxn7wKkC-ap0IeWNQTRBUX/pub?start=false&loop=false&delayms=3000",
  painting: "https://docs.google.com/presentation/d/e/2PACX-1vRets4WF_lfCmrv00ZxLr08_8FlH2ZUxeCDEvc7sRhf7QqZaVWcZ6H1GGwNJWfurpKTkgN7p8kp9c5S/pub?start=false&loop=false&delayms=3000",
  animating: "https://docs.google.com/presentation/d/e/2PACX-1vQr_ZzfxG3d6MIjXhmTKX3Gnx6B9aErdo4dJb9MM09-utsWHyMJOgQX9zf7-h9xHOBnRB6Eb3goEYna/pub?start=false&loop=false&delayms=3000",
  cinemachine: "https://docs.google.com/presentation/d/e/2PACX-1vT33YuTNqDICgII9KzAM59p683O-khvPoelzh1kbSVtOJpJrcKMy4LQ4m_hGtqEHca4FgPvPVZsOk02/pub?start=false&loop=false&delayms=3000"
}

function openLesson(lessonName) {
  if (links.hasOwnProperty(lessonName)) {
    window.open(links[lessonName]);
  } else
  {
    console.log("Lesson does not exist");
  }
}
