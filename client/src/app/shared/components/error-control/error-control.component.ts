import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.css']
})
export class ErrorControlComponent implements OnInit {

  @Input() mostrarError;
  @Input() msgError;

  constructor() { }

  ngOnInit() {
  }
  
}
