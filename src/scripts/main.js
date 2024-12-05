AOS.init();

const dataDoEvento = new Date("Oct 28, 2025 18:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasEvento = Math.floor(distEvento / diaEmMs);
    const horasEvento = Math.floor((distEvento % diaEmMs) / horaEmMs);
    const minutosEvento = Math.floor((distEvento % horaEmMs) / minutoEmMs);
    const segundosEvento = Math.floor ((distEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);