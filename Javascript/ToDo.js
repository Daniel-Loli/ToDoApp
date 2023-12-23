
let actividad = document.querySelector('#todoInput');
const boton = document.querySelector('#addButton');
const tbody = document.querySelector('#tbody');

boton.addEventListener('click', agregarActividad);

function agregarActividad() {
    // Crear una nueva fila (tr)
    let newTr = document.createElement('tr');

    // Crear una nueva celda (td) para el checkbox
    let checkboxCell = document.createElement('td');

    // Crear un nuevo checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');

    // Añadir el checkbox a la celda
    checkboxCell.appendChild(checkbox);

    // Crear una nueva celda (td) para el contenido de la tarea
    let newTd = document.createElement('td');

    // Crear un nuevo párrafo (p) para el contenido de la celda
    let newP = document.createElement('p');
    newP.classList.add('actividades');
    newP.innerText = actividad.value;

    // Añadir el párrafo a la celda
    newTd.appendChild(newP);

    // Añadir las celdas a la fila
    newTr.appendChild(checkboxCell);
    newTr.appendChild(newTd);

    // Añadir la fila a la tabla
    tbody.appendChild(newTr);

    // Limpiar el campo de entrada
    actividad.value = '';

    // Agregar un evento al checkbox para manejar su estado (completado o no)
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            // Marcar la tarea como completada con una animación
            newP.style.transition = 'text-decoration 0.3s ease-in-out';
            newP.classList.add('disable');
        } else {
            // Marcar la tarea como no completada con una animación
            newP.style.transition = 'text-decoration 0.3s ease-in-out';
            newP.classList.remove('disable');
        }
    });
}
