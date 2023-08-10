import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.css'],
})
export class QueryInputComponent {
  @Output() public queryFormSubmit = new EventEmitter();
  @Input() errorMessage: string = '';
  @Input() dataLength: number = 1;

  onQueryFormSubmit(data: object) {
    this.queryFormSubmit.emit(data);
  }
}
