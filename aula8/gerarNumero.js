function gerarNumero(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(`O número sorteado foi: ${numero}`)
}

module.exports = gerarNumero