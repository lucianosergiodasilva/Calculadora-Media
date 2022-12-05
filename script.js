// Selecionando elementos

let aviso = document.querySelector('#aviso');
let formulario = document.querySelector('form')
let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')
let esconder = document.querySelector('.esconder')
let conteudo = document.querySelector('.conteudo')

// Retorna a média entre dois números

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}

// Retorna a situação da média (Aprovado, Reprovado, Recuperação)

function situacaoFinal(mediaFinal) {
    if (mediaFinal >= 7) {
        return 'Aprovado'
    } else if (mediaFinal < 4) {
        return 'Reprovado'
    } else {
        return 'Recuperação'
    }
}

// Formata a situação da média (Ex: Reprovado - Vermelho)

function formatarSituacao(situacaoFinal) {
    switch (situacaoFinal) {
        case 'Aprovado':
            cxSituacao.classList.add('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            console.log('Adicionar classe aprovado')
            break
        case 'Reprovado':
            cxSituacao.classList.add('reprovado')
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            console.log('Adicionar classe reprovado')
            break
        case 'Recuperação':
            cxSituacao.classList.add('recuperacao')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('aprovado')
            console.log('Adicionar classe recuperacao')
            break
        default:
            console.log('Situação indefinida')
    }
}

// Mostra um alerta ao perder o foco, conforme a condição da nota

function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset()
        aviso.textContent = 'Infome uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function () {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 4000)
    }
}

// Evento para Calcular a média e mostrar na tela

btnCalcular.addEventListener('click', function (e) {

    // Condição caso os campos estejam fazios

    if (cxNota1.value === '' || cxNota2.value === '' || cxNota1.value < 0 || cxNota1.value > 10 || cxNota2.value < 0 || cxNota2.value > 10) {

        // Limpa a formatação da Situação Final
        cxSituacao.classList.remove('aprovado')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.remove('recuperacao')

        console.log('Campos vazios')
    } else {
        console.log('Calcular Média')

        // Aumentando a altura do conteúdo
        conteudo.style.height = '400px'

        // Pegando os dados do input e convertendo para Float
        let nota1 = parseFloat(cxNota1.value)
        let nota2 = parseFloat(cxNota2.value)

        // Calculando a média
        let media = calcularMedia(nota1, nota2)

        // Mostrando os dados no conscole
        console.log(nota1)
        console.log(nota2)
        console.log(media)

        // Condição caso a média não seja um número ou seja menor que zero
        if (isNaN(media) || media < 0) {
            console.log('Não é um número')
            cxSituacao.value = ''
        } else {
            // Mostrando os dados na tela, convertendo para Float
            esconder.classList.remove('esconder')
            cxMedia.value = parseFloat(media)
            cxSituacao.value = situacaoFinal(media)

            // Formatando a situação de acordo com a média
            formatarSituacao(situacaoFinal(media))
        }
    }
    e.preventDefault()
})

// Evento limpa a formatação da cxSituacao

btnLimpar.addEventListener('click', function () {
    // Voltando a altura normal do conteúdo
    conteudo.style.height = 'auto'

    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
    esconder.classList.add('esconder')
})
