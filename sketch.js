
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
  background(45);
}




function draw() {

  //"vermetti" bianchi
  noFill();
  stroke(255); 
  strokeWeight(1);
  blendMode(ADD); 

  let padding = 51; // Padding tra i glifi
  let glifoWidth = 50; // Larghezza di ogni glifo
  
  let glifiRow = floor((windowWidth - 2 * padding) / (glifoWidth + padding));//quanti glifi per riga
  let glifiCol = floor((windowHeight - 2 * padding) / (glifoWidth + padding));//quanti glifi per colonna

  // larghezza altezza totali dell'"insieme" dei glifi
  let totalWidth = glifiRow * (glifoWidth + padding) - padding;
  let totalHeight = glifiCol * (glifoWidth + padding) - padding;

  // la posizione iniziale per poter centrare il tutto, quindi tutta la finestra meno l'ingombro dei glifi, diviso 2 (i due lati)
  let startX = (windowWidth - totalWidth) / 2;
  let startY = (windowHeight - totalHeight) / 2;


  // Cicli per disegnare i glifi in una griglia
  for (let i = 0; i < glifiCol; i++) {
    for (let j = 0; j < glifiRow; j++) {
      let x = startX + j * (glifoWidth + padding);
      let y = startY + i * (glifoWidth + padding);





      //TRASFORMAZIONE (con chiamata alla funzione drawGlifi)


      push();//salva lo stato corrente della trasformazione. Ora può avvenire la modifica.

      translate(x, y);//viene applicata una traslazione dall'origine del sistema di coordinate

      drawGlifi((random(3, 9)), /*viene generato un numero casuale tra 3 e 7 (rosso) con la dimensione di*/ glifoWidth, (random(4, 8))); //"vermetti" bianchi

      pop();//Questo comando ripristina lo stato della trasformazione precedentemente salvato da push(). Tutte le trasformazioni fatte dopo la chiamata a push() vengono annullate, e si torna allo stato originale.
    }
  }
}








//tre parametri: numGlifi (numero di glifi da disegnare), side (dimensione dell'area in cui disegnare i punti), e points (numero di punti per ogni glifo).
 // con il ciclo for chiama la funzione Glifi un numero numGlifi di volte.

function drawGlifi(numGlifi = 3, side = 10, points = 20) {
  for (let n = 0; n < numGlifi; n++) {
    Glifi(side, points);
  }
}



function Glifi(side = 50, points = 20) {
  beginShape(); //inizia una nuova forma
  for (let p = 0; p < points; p++) {
    let x = random(side);
    let y = random(side);
    curveVertex(x, y);
  }
  endShape(CLOSE); //chiude la forma
  
  drawDots(side); 
}


//disegna i puntini in dimensioni e posizioni randomiche
function drawDots(side) {
  let numDots = (random(4, 10)); 
  fill(255, 0, 0, 96); // Colore rosso con alfa (per renderlo semitrasparente)
  noStroke();
  

  for (let d = 0; d < numDots; d++) {
    let dotX = random(side);
    let dotY = random(side);
    let dotSize = random(0.5, 5); 
    ellipse(dotX, dotY, dotSize, dotSize); // Disegna un puntino con dimensione variabile
  }
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw(); 
}














