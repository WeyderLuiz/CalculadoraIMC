//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', fale);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', fale);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResult(msg, true);

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResult(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criaP();
        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }
        
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
});

function getImc(peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const nível = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    
    if(imc>= 39.9) return imc[5];
    if(imc>= 34.9) return imc[4];
    if(imc>= 29.9) return imc[3];
    if(imc>= 24.9) return imc[2];
    if(imc>= 18.5) return imc[1];
    if(imc < 18.5) return imc[0];
}
