import { Component, OnInit } from "@angular/core";
import { Skill } from "../models/models";

@Component({
  selector: "skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: "JAVA",
      level: "Expert",
      rating: 90,
    },
    {
      name: "Angular, Angular Material",
      level: "Expert",
      rating: 85,
    },
    {
      name: "Python",
      level: "Intermidiate",
      rating: 70,
    },
    {
      name: "HTML, CSS, JS",
      level: "Expert",
      rating: 80,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
