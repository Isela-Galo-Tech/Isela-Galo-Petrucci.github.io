let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#fb4993;">Soy Front-end developer y comparto contenido de tecnología')
  .pauseFor(200)
  .deleteChars(10)
  .start();
