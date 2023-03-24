const doc = {
    hosszInput: document.querySelector('#hossz'),
    elotolasInput: document.querySelector('#elotolas'),
    fordulatszamInput: document.querySelector('#fordulatszam'),
    calcButton: document.querySelector('#calcButton'),
    idoInput: document.querySelector('#ido')
};


doc.calcButton.addEventListener('click', () => {
    startCalculation();
});

function startCalculation() {
    let hossz  = Number(doc.hosszInput.value);
    let elotolas = Number(doc.elotolasInput.value);
    let fordulatszam = Number(doc.fordulatszamInput.value);
    let ido = calcEffective(hossz , elotolas, fordulatszam);
    console.log(fordulatszam)
    doc.idoInput.value = ido;
}

function calcEffective(hossz, elotolas, fordulatszam ) {
    let ido = (
        hossz / (elotolas * fordulatszam)
        );
        document.getElementById("result1").innerHTML="Ennyi idő kell (perc): " + ido;
    
}