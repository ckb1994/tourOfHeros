import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-new-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

/*  hero = 'Windstorm'; */
    hero:Hero = {
      id:1,
      name: 'windstorm'
    };
    heros = HEROES;
  constructor() {   }

  ngOnInit(): void {  }

}
