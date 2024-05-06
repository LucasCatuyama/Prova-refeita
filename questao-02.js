document.addEventListener('DOMContentLoaded', function() {
    const distancia = document.getElementById('distancia');
    const consumoMedio = document.getElementById('consumoMedio');
    const precoLitro = document.getElementById('precoLitro');
    const participantes = document.getElementById('participantes');
    const calcular = document.getElementById('calcular');
    const resultadoCombustivel = document.getElementById('resultadoCombustivel');
    const custoViagem = document.getElementById('custoViagem');
    const custoParticipante = document.getElementById('custoParticipante');

    calcular.addEventListener('click', function(event) {
        event.preventDefault();

        const valorDistancia = parseFloat(distancia.value);
        const valorConsumoMedio = parseFloat(consumoMedio.value);
        const valorPrecoLitro = parseFloat(precoLitro.value);
        const valorParticipantes = parseInt(participantes.value);

        const litrosNecessarios = valorDistancia / valorConsumoMedio;
        resultadoCombustivel.textContent = litrosNecessarios.toFixed(2) + ' L';

        const custoTotal = litrosNecessarios * valorPrecoLitro;
        custoViagem.textContent = 'R$ ' + custoTotal.toFixed(2);

        const custoPorParticipante = custoTotal / valorParticipantes;
        custoParticipante.textContent = 'R$ ' + custoPorParticipante.toFixed(2);
    });
});
