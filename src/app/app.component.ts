import { Component, OnInit, inject } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'listaTareasApp';

  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasService: any = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea() {
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.listaTareas = this._tareasService.getTareas();
    this.nuevaTarea = '';
  }

  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
