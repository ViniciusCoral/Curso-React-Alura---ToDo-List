export default class ArrayDeNotas {
    constructor() {
        this._notas = [];
        this._inscritos = [];
    }

    get notas() {
        return this._notas;
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this._notas.push(novaNota);
        this.notificar();
    }

    apagarNota(indice) {
        this._notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        this._inscritos.forEach(func => {func(this._notas)});
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}