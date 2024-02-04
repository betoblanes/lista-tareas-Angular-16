import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  /**
   * Obtiene las tareas del localStorage
   * @returns {string[]} tareas
   */
  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  /**
   * Agrega una tarea al localStorage
   * @param tarea 
   */
  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  /**
   * Elimina una tarea del localStorage
   * @param index 
   */
  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  constructor() { }
}
