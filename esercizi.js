/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const h1 = document.getElementsByTagName("h1")[0]
  return (h1.innerText = "Nuovo titolo della pagina")
}

changeTitle()

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const h1 = document.getElementsByTagName("h1")[0]
  return h1.classList.add("myHeading")
}
addClassToTitle()

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  const pChildrenOfDiv = document.querySelectorAll("div > p")
  for (let i = 0; i < pChildrenOfDiv.length; i++) {
    pChildrenOfDiv[i].innerText = "Nuovi paragrafi"
  }
}

changePcontent()

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const allTheLink = document.querySelectorAll("a:not(:last-child)")
  for (let i = 0; i < allTheLink.length; i++) {
    allTheLink[i].setAttribute("href", "https://www.google.com")
  }
}

changeUrls()

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const secondaLista = document.getElementById("secondList")
  secondaLista.innerHTML += "<li>4rd</li>"
}

addToTheSecond()

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const creoPar = document.createElement("p")
  const primoDiv = document.querySelector("div")
  primoDiv.appendChild(creoPar)
}

addParagraph()

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const primaLista = document.querySelector("ul")
  primaLista.remove()
}

hideFirstUl()

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const lista = document.querySelectorAll("ul")
  for (let i = 0; i < lista.length; i++) {
    lista[i].style.background = "green"
  }
}

paintItGreen()

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1 = document.getElementsByTagName("h1")[0]
  h1.onclick = () => {
    h1.innerText = h1.innerText.slice(0, -1)
  }
}

makeItClickable()

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.getElementsByTagName("footer")[0]
  const linkFooter = document.querySelector("footer > h3 > a")
  footer.onclick = () => {
    alert(linkFooter)
  }
}
revealFooterLink()

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const creaTabella = document.createElement("table")
  const divTabella = document.getElementById("tableArea")
  divTabella.appendChild(creaTabella)
  creaTabella.innerHTML = `
    <tr>
      <th>Immagine</th>
      <th>Nome prodotto</th>
      <th>Quantità</th>
      <th>Prezzo</th>
    </tr>
    <tr>
      <td><img src="https://placebear.com/50/50" alt="Foto Orso" /></td>
      <td>Orso</td>
      <td>12</td>
      <td>129$</td>
    </tr>
    <tr>
      <td><img src="https://placecats.com/50/50" alt="Foto gatto" /></td>
      <td>Gatto</td>
      <td>8</td>
      <td>79$</td>
    </tr>
    <tr>
      <td><img src="https://placedog.net/50/50" alt="Foto Cane" /></td>
      <td>Cane</td>
      <td>7</td>
      <td>179$</td>
    </tr>
    <tr>
      <td><img src="https://baconmockup.com/50/50" alt="Foto Orso" /></td>
      <td>Bacon</td>
      <td>12</td>
      <td>32$</td>
    </tr>
    <tr>
      <td><img src="https://picsum.photos/50/50" alt="oggetto casuale" /></td>
      <td>Oggetto casuale</td>
      <td>1</td>
      <td>50$</td>
    </tr>
`
  //   const tr = document.querySelectorAll("td")
  //   const th = document.querySelectorAll("th")
  //   tr.style.border = "1px solid black"
}

generateTable()

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {
  const tabella = document.getElementsByTagName("table")[0]
  tabella.innerHTML += `
    <tr>
      <td><img src="https://placeholder.pagebee.io/api/random/50/50" alt="oggetto casuale" /></td>
      <td>Altro oggetto casuale</td>
      <td>1</td>
      <td>100$</td>
    </tr>`
}

addRow()

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const immaginiTabella = document.querySelectorAll("td > img")

  for (let i = 0; i < immaginiTabella.length; i++) {
    immaginiTabella[i].style.display = "none"
  }
}

hideAllImages()

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const h2 = document.getElementById("changeMyColor")
  h2.onclick = () => {
    h2.style.color = `rgb(
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }
}

changeColorWithRandom()
