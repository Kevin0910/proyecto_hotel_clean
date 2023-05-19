import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'buscadorBox',
  templateUrl: './box-search.component.html',
  styles: [
  ]
})
export class BoxSearchComponent {

  private flujoDeCadena: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebouce = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    this.flujoDeCadena
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebouce.emit(value)
    });
  }

  emitValue(value: string){
    this.onValue.emit(value);
  }

  onKeyPress(terminoBusqueda: string){
    this.flujoDeCadena.next(terminoBusqueda)
  }

}
