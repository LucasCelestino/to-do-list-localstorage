import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component, VERSION } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tarefas: String[] = [];

  tarefaInput: string;

  adicionarTarefa() {
    if (this.tarefaInput != null) {
      console.log(this.tarefas);
    } else {
      alert('preencha o campo antes de continuars');
    }
  }
}
