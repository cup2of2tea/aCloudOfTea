import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-algorithm',
  templateUrl: './homeAlgorithm.component.html',
  styleUrls: ['./homeAlgorithm.component.scss']
})
export class HomeAlgorithmComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }
  posts: any;
  ngOnInit() {
    this.posts = [

      {
        route: '/articles/Aoc1_2',
        title: 'Jours 1 et 2 de l\'Advent of Code'
      },
      {
        route: '/articles/IsogradSeptembre',
        title: 'Concours Isograd Septembre 2020'
      },
      {
        route: '/articles/ProgComp',
        title: 'Programmation compétitive'
      }
    ]
  }

}
