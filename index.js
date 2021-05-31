//draggable puzzle is the idea, not yet finished as you can probably tell
//copied and pasted this js from w3school
//feel free to give suggestions to any part of the code and tweet me @ilovepeoplez ! ^^

// Model
let topSection = `<div class="info">
<h1 id="title">Story - Team2</h1>
<div id="rest">Plasser ordene i riktig kontekst</div>
</div>`;
let pieces = `<div id="texts">
<div id="piece4" draggable="true" ondragstart="drag(event)">story.</div>
<div id="piece6" draggable="true" ondragstart="drag(event)">living</div>
<div id="piece3" draggable="true" ondragstart="drag(event)">same</div>
<div id="piece1" draggable="true" ondragstart="drag(event)">you</div>
<div id="piece2" draggable="true" ondragstart="drag(event)">telling</div>
<div id="piece7" draggable="true" ondragstart="drag(event)">sad</div>
<div id="piece5" draggable="true" ondragstart="drag(event)">will</div>
</div>`;
let page = `<div class="page" id="text">
<div
  class="s1"
>If</div>
<div
id="piece1"
class="s2"
ondrop="drop(event)"
ondragover="allowDrop(event)"
></div>
<div
  class="s3"
>keep</div>
<div
  id="piece2"
  class="s4"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s5"
>the</div>
<div
  id="piece3"
  class="s6"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s7"
>sad</div>
<div
  id="piece4"
  class="s8"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s9"
>You</div>
<div
  id="piece5"
  class="s10"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s11"
>keep</div>
<div
  id="piece6"
  class="s12"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s13"
>the same</div>
<div
  id="piece7"
  class="s14"
  ondrop="drop(event)"
  ondragover="allowDrop(event)"
></div>
<div
  class="s15"
>life </div>

</div>`;

// View
updateView();
function updateView() {
  document.getElementById("root").innerHTML = `
    ${topSection}
    ${pieces}
    ${page}
    `;
}

// Controller
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.id == data
    ? ev.target.appendChild(document.getElementById(data))
    : null;
}
