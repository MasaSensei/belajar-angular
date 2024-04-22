import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message changed from Parent';
  message: string = '';
  fromChildOutput: string = '';
  bool: boolean = true;
  userName: string = '';
  textValue: string = 'value is coming from parent';

  buttonClick() {
    console.log('button clicked', this.bool);
  }

  onKeyup() {
    console.log(this.textValue);
  }

  @ViewChild(PostComponent) childComp: PostComponent | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.message = this.childComp!.childMessage;
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }
}
