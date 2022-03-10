export class Carousel {
    constructor(anterior, proximo, listaDepoimentos) {
        this.anterior = document.querySelector(anterior)
        this.proximo = document.querySelector(proximo)
        this.listaDepoimentos = document.querySelector(listaDepoimentos)

        this.botaoDireita = document.querySelector('.botao__proximo___caroussel-depoimentos')
        this.botaoEsquerda = document.querySelector('.botao__anterior___caroussel-depoimentos')
        this.vetorEsquerda = document.querySelector('.vetor-esquerda___caroussel-depoimentos')

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximo.addEventListener('click', this.proximoSlide.bind(this))

        this.anterior.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()

        
    }

    getListaSlides() {
        return Array.from(this.listaDepoimentos.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0 
        }
        if (proximaPosicao == 2) {
            this.botaoDireita.style.opacity = ` .5 ` 
        }else{
            this.botaoDireita.style.opacity = ` 1 ` 
        }

        if (proximaPosicao == 1) {
            this.botaoEsquerda.style.opacity = ` 1 ` 
        }
        if (proximaPosicao == 0) {
            this.botaoEsquerda.style.opacity = ` .5 ` 
        }
        
        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao < 2) {
            this.botaoDireita.style.opacity = ` .5 ` 
        }else{
            this.botaoDireita.style.opacity = ` 1 ` 
        }
        if (proximaPosicao <= 0) {
            this.botaoEsquerda.style.opacity = ` .5 ` 
        }
        if (proximaPosicao <= 1) {
            this.botaoEsquerda.style.opacity = ` .5 ` 
        }
        if (proximaPosicao <= 3) {
            this.botaoEsquerda.style.opacity = ` 1 ` 
        }
        if (proximaPosicao < 1) {
            this.botaoEsquerda.style.opacity = ` .5 ` 
        }


        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }

    scrollParaSlide(slideSelecionado) {
        this.listaDepoimentos.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}