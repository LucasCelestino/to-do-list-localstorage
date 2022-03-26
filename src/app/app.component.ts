import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component, VERSION } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tarefasArray: any[] = [];

  tarefasStorage = localStorage;

  tarefaInput: string;

  adicionarTarefa() {
    if (this.tarefaInput != null) {
      this.tarefasArray.push({
        indice: this.tarefasArray.length,
        nome: this.tarefaInput,
      });

      this.tarefasStorage.setItem('tarefas', JSON.stringify(this.tarefasArray));
      console.log(this.tarefasStorage.getItem('tarefas'));
    } else {
      alert('preencha o campo antes de continusasaars');
    }
  }

  getTarefas() {
    return JSON.parse(this.tarefasStorage.getItem('tarefas'));
  }

  concluirTarefa(id: any) {
    this.tarefasArray.splice(id, 1);
    console.log(this.tarefasArray);
  }
}
