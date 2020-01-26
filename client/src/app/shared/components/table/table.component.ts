import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() table;
  @Output() getIndex = new EventEmitter;
  @Output() getRow = new EventEmitter;

  constructor() {
  }

  ngOnInit() { 
    console.log(this.table)
  }

  editar(index) {
    this.getIndex.emit(index);
  }

  excluir(row, index) {
    this.getRow.emit({
      row,
      index
    });
  }

}
