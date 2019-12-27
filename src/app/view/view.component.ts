import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../app.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() people : People;
  @Output() onDelete: EventEmitter<People> = new EventEmitter<People>();

  constructor() { }

  deletePeople(id) {
    this.onDelete.emit(this.people);
  }

  ngOnInit() {
  }

}
