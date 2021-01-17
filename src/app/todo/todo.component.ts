import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Object;
  selected: any;
  showall: boolean;
  constructor(private session: SessionService) {
    this.showall = true;
  }

  getApi(id: string) {
    this.session.getDataByID(parseInt(id)).subscribe((item) => {
      this.selected = [item];
      this.showall = false;
    });
  }
  showalltodo() {
    this.showall = true;
    this.selected = [];
  }
  ngOnInit() {
    this.showall= true;

    this.session.getData().subscribe((item) => {
      this.todos = item;
    });
  }

}
