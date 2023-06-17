import { Component } from '@angular/core';
import { Skill } from '../models/models'
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: "Python",
      level: "intermediate",
      rating: 80,
    },
    {
      name: "C Plus PLus",
      level: "intermediate",
      rating: 80,
    },
    {
      name: "HTML, CSS and JavaScript",
      level: "intermediate",
      rating: 80,
    },
    {
      name: 'Django and Flask',
      level: "intermediate",
      rating: 80
    },
    {
      name: 'SQL (MySQL) and Mongo DB',
      level: "intermediate",
      rating: 80
    },
    {
      name: 'Figma, Postman',
      level: "Basic",
      rating: 40
    },

  ]
}
