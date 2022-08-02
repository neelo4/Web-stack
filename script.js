class GameOfLife{
    constructor(container){

        this.container = container;

    }
    createGrid(){
        //if any existing table grid

        if(this.container.hasChildNodes())
        this.container.innerHTML = '';

        //CREATE HTML TABLE

        const table = document.createElement(table);
        this.container.appendChild(table);

        if(table){
            const tbody = document.createElement('tbody');
            table.appendChild(tbody);

            this.Rows = Math.round(window.innerHeight * 0/031)
        }
}













