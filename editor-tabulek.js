let tabulka;
let vychoziVelikostX = 5;
let vychoziVelikostY = 3;


let aktivniBunka;

function vytvorBunku() {
    let td = document.createElement("td");

    let tdInput = document.createElement("input");

    tdInput.type = "text";
    tdInput.onfocus = function () {
        aktivniBunka = this;
    }
    td.appendChild(tdInput);

    return td;
}

function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    document.body.appendChild(tabulka);
}

function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    document.body.appendChild(tabulka);
    for (let y = 0; y < vychoziVelikostY; y++) {
        let tr = document.createElement("tr");
        tabulka.appendChild(tr);

        for (let x = 0; x < vychoziVelikostX; x++) {
            tr.appendChild(vytvorBunku());
        }
    }
}

window.onload = function () {
    vytvorVychoziTabulku();
}

function vytvorTlacitkoAVlozHo(popisek, rodic) {
    let btn = document.createElement("button");
    btn.textContent = popisek;
    rodic.appendChild(btn);
    return btn;
}

function vytvorOvladaciTlacitka() {
    vytvorTlacitkoAVlozHo("Přidat řádek dolů", document.body);
    vytvorTlacitkoAVlozHo("Přidat řádek nahoru", document.body);
    vytvorTlacitkoAVlozHo("Přidat sloupec vlevo", document.body);
    vytvorTlacitkoAVlozHo("Přidat sloupec vpravo", document.body);
    vytvorTlacitkoAVlozHo("Odstranit řádek", document.body);
    vytvorTlacitkoAVlozHo("Odstranit sloupec", document.body);
}

window.onload = function () {
    vytvorOvladaciTlacitka();
    vytvorVychoziTabulku();
}

function vytvorRadek() {
    let novyRadek = document.createElement("tr");

    for (let i = 0; i < pocetBunekVPrvnimRadku; i++) {
        novyRadek.appendChild(vytvorBunku());
    }
    return novyRadek;
}

let prvniRadek = tabulka.firstElementChild;
let bunkyPrvnihoRadku = prvniRadek.childNodes;
let pocetBunekVPrvnimRadku = bunkyPrvnihoRadku.length;


