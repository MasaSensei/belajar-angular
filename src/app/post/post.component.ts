import { Component, OnInit, Input } from '@angular/core';

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

  @Input() fromParent: string = '';

  constructor() {}

  ngOnInit(): void {}
}
