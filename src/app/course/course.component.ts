import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  newf = this.formBuilder.group({
    name: '',
    trainer: '',
    date: ''
  });
  editf = this.formBuilder.group({
    name: '',
    trainer: '',
    date: ''
  });
  constructor(private formBuilder: FormBuilder,) { }
  submitted = false;
  edit: number=-1;
  Details: number=-1;
  sessions = [
  ];

  addNewSession() {
    this.Details = -1;
    this.submitted = true;
    if (this.edit === -1) {
      var newSession = {
        id: this.sessions.length,
        ...this.newf.value
      };
      this.sessions.push(newSession);
      this.newf.reset();
    } else {
      this.sessions[this.edit] = {
        id: this.edit,
        ...this.editf.value
      }
    }
    this.edit = -1;
  }

  deleteSession(id) {
    this.Details = -1
    console.log(this.sessions.length);
    if (this.sessions.length === 1) {
      this.sessions = [];
      return;
    }
    for (var i in this.sessions) {
      if (this.sessions[i].id == id) {
        this.sessions.splice(parseInt(i), 1);
      }
    }
  }

  SetDate(date) {
    var day = date.getDate().toString();
    var month = (date.getMonth() + 1).toString();
    var year = date.getFullYear();
    if (parseInt(month) < 10) month = "0" + month;
    if (parseInt(day) < 10) day = "0" + day;
    var editDate = day + "/" + month + "/" + year;
    return editDate;
  }

  editSession(Id) {
    this.Details = -1
    this.edit = Id;
    this.editf.get("name").setValue(this.sessions[Id].name)
    this.editf.get("trainer").setValue(this.sessions[Id].trainer)
    this.editf.get("date").setValue(new Date())
    var sessionDate = this.SetDate(this.sessions[Id].date);
    this.newf.get("date").setValue(sessionDate);
    document.getElementById("date").innerHTML = sessionDate;
  }

  expand(sessionId) {
    this.Details = sessionId;
  }
  ngOnInit(): void {
  }

}
