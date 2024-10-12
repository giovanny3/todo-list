/*Elementos necesarios*/
const listadoDeTareas = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("escribir-tareas");
const btnAgregar = document.getElementById("agregar-tareas");
const cuentaTotalTareas = document.getElementById("total-tareas")
const cuentaTareasHechas = document.getElementById("tareas-realizadas")

/*Arreglo guardar tareas*/
const tareas = [
    { id: 1, tarea: "Ir al supermercado", completada: false },
    { id: 2, tarea: "Ir a la feria", completada: false },
    { id: 3, tarea: "Terminar el desafío", completada: false },
];

/*Renderizar tareas en el DOM*/
function renderTareas() {
    let html = "";
    for (let tarea of tareas) {
      html += `<tr class="${tarea.completada ? 'completada' : ''}">
        <td class="punto-lista">${tarea.id}</td>
        <td class="punto-lista">${tarea.tarea}</td>
        <td>
          <input class="input-seleccionar" type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="marcarTarea(${tarea.id})">
          <button class="btnx-eliminar" onclick="borrar(${tarea.id})">❌</button>
        </td>
      </tr>`;
    }

    listadoDeTareas.innerHTML = html;
    cuentaTotalTareas.textContent = `Total: ${tareas.length}`; /*Contar todas tareas */ 
    cuentaTareasHechas.textContent = `Realizadas: ${tareas.filter(t => t.completada).length}`; /*Contar tareas hechas*/ 
  }

/*Función borrar id tareas*/
function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    if (index !== -1) {
      tareas.splice(index, 1);
      renderTareas();
    }
  }

/*Función marcar tareas hechas */
  function marcarTarea(id) {
    const tarea = tareas.find((ele) => ele.id == id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      renderTareas();
    }
  }

/*Para agregar una tarea */
btnAgregar.addEventListener("click", () => {
    const nuevaTarea = inputTarea.value;
    if (nuevaTarea.trim() !== "") {
      tareas.push({ id: Date.now(), tarea: nuevaTarea, completada: false }); // Agregar un objeto con ID y estado completado
      inputTarea.value = ""; // Vaciar Input
      renderTareas();
    }
  });
  

renderTareas();

