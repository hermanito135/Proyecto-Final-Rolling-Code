document.addEventListener('DOMContentLoaded', function() {
    let loadMoreBtn = document.querySelector('#load-more');
    let currentItem = 8;

    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.box-container .box')];
        for (var i = currentItem; i < currentItem + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }

        currentItem += 4;
        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none';
        }
    };

    // Apartado Carrito

    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

    cargarEventListeners();

    function cargarEventListeners() {
        elementos1.addEventListener('click', comprarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    function comprarElemento (e) {
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        }
        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${elemento.imagen}" width="100" height="150">
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${elemento.id}">Eliminar</a>
            </td>
        `;
        lista.appendChild(row);
    }

    function vaciarCarrito () {
        while(lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
    }

    const elementos = document.getElementById('lista-1');

    elementos.addEventListener('click', agregarAlCarrito);

    function agregarAlCarrito(e) {
        if(e.target.classList.contains('fa-shopping-cart')) {
            const elemento = e.target.parentElement.parentElement;
            const infoElemento = {
                imagen: elemento.querySelector('img').src,
                titulo: elemento.querySelector('h3').textContent,
                precio: elemento.querySelector('.precio').textContent,
                id: elemento.querySelector('a').getAttribute('data-id')
            };
            insertarCarrito(infoElemento);
        }
    }

    function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${elemento.imagen}" width="100" height="150">
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${elemento.id}">Eliminar</a>
            </td>
        `;
        carrito.querySelector('tbody').appendChild(row);
    }
});