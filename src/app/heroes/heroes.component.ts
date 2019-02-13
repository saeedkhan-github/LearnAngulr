import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['parentData'],
})
export class HeroesComponent implements OnInit {

  constructor() { }
  public parentData: string;

  ngOnInit() {
  }

}
