import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  title: string = 'List Of Posts';
  messagePost: string = 'Hello World';

  postParentMessage: string = 'Messange comming from parent';

  childMessage: string = 'Messange comming from child';

  outputChildMessage: string = 'Message from child via output property';

  @Input() fromParent: string = '';

  @Output() childMessageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.childMessageEvent.emit(this.outputChildMessage);
  }
}
