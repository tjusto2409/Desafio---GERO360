import { Component, OnInit, Input, Output, EventEmitter, 
  DoCheck, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements DoCheck, OnInit {

  @Input() table;
  @Input() alterTable;
  @Output() getIndex = new EventEmitter;
  @Output() getRow = new EventEmitter;

  arrayDiffer: any;
  td: Array<any> = [];
  index;

  constructor(private kvDiffers: KeyValueDiffers) {}

  ngOnInit() {
    this.arrayDiffer  = this.kvDiffers.find(this.table.td).create();
  }

  ngDoCheck() {
    let empArrayChanges = this.arrayDiffer.diff(this.table.td);

    if(empArrayChanges) {
      empArrayChanges.forEachAddedItem((record) => {
        let emp = record.currentValue;
        this.td.push(this.changeTemplate(emp));
      });

      empArrayChanges.forEachRemovedItem(() => {
        this.td.splice(this.index, 1);
      });

      if(this.table.td[this.index] != undefined) 
        this.td[this.index] = this.changeTemplate(this.table.td[this.index]);    
    }
  }

  changeTemplate(row) {
    row = Object.assign({}, row);
    this.alterTable.forEach(
      alterField => delete row[alterField]
    );

    return row;
  }

  editar(index) {
    this.index = index;
    this.getIndex.emit(index);
  }

  excluir(index) {
    this.index = index;
    this.getRow.emit(index);
  }
}
