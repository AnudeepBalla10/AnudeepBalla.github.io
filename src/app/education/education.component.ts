import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "state university of new york",
      course: 'MS',
      duration: '2019-2020',
      score: '80%',
    },
    {
      institute: 'Mahindra Ecole Centrale',
      course: 'Bachelor of Technology',
      duration: '2014-2018',
      score: '75%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
