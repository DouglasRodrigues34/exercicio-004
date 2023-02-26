class validaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.evento()
    }

    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposValidos()
    }

    camposValidos() {
        let valid = true

        for(let campo of this.formulario.querySelectorAll('validar')) {
            if(!campo.value) {
                this.criaErro(campo, 'Campo tal não pode estar em branco')
            }
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('erro-text')
    }
}

const valida = new validaFormulario()