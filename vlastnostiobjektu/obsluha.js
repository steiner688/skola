const microsoft = new Firma("Microsoft Corporation", "Redmont, Washington");
const google = new Firma("Google LLC", "Mountain View, California");


function pripravTlacitko(firma) {
    const buttonPridej = document.createElement("button");
    buttonPridej.innerText = 'Pridej zamestnance' + firma.nazev
    buttonPridej.onclick = function() {pridejZamestnance(firma); }


    const buttonVypis = document.createElement("button");
    buttonVypis.innerText = 'Vypis zamestnance' + firma.nazev
    buttonVypis.onclick = function() {vypisZamestnance(firma); }
    
    document.body.appendChild(buttonPridej);
    document.body.appendChild(buttonVypis);
}

function pridejZamestnance(firma) {
    const jmeno = prompt("Zadej jmeno zaměstnance");
    const vek = prompt("Zadej věk");
    const pozice = prompt("Zadej pracovní pozici");
    const zamestnanec = new Zamestnanec(jmeno,vek,pozice);
    firma.zamestnanci.push(zamestnanec);
}

function vypisZamestnance(firma) {
    const h3 = document.createElement("h3")
    h3.innerText = 'Zaměstnanci' + ' ' + firma.nazev
    const seznam = document.createElement("ul");
    for (const zamestnanec of firma.zamestnanci) {
        seznam.innerHTML += `<li><strong>Jméno</strong>: ${zamestnanec.jmeno}</li>`;
        seznam.innerHTML += `<li><strong>Věk</strong>: ${zamestnanec.vek}</li>`;
        seznam.innerHTML += `<li><strong>Pozice</strong>: ${zamestnanec.pozice}</li>`;
    }
    document.body.appendChild(seznam);
}

pripravTlacitko(microsoft)
pripravTlacitko(google)