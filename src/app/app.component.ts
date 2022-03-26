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
        id: this.tarefasArray.length + 1,
        nome: this.tarefaInput,
      });

      console.log(this.tarefasArray);
    } else {
      alert('preencha o campo antes de continuars');
    }
  }

  concluirTarefa() {}
}
