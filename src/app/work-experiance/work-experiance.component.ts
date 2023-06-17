import { Component } from '@angular/core';
import {WorkExperiance} from '../models/models'

@Component({
  selector: 'work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.scss']
})
export class WorkExperianceComponent {
  workExpList : WorkExperiance[] = [
    {
      role: "Backend Developer",
      company: "Thinkgroupy",
      duration: "29th August - 30th September",
      description: ["Built Rest APIs in Django for company’s dashboard.",
                    "Used AWS Cloud 9 and Amazon EC2 for development.",
                    "Proposed system designs for the website using JWT Access Tokens and Django-Celery.",
                    "Integrated backend to frontend in AngularJS."],
    },
    {
      role: "Backend Developer",
      company: "RFM360",
      duration: "1st June - 1st August",
      description: ["Developed both Frontend (HTML, CSS and Javascript) and backend code (Django) for various forms.", 
                    "Built Rest APIs and worked with Web APIs like OpenAI and Currency API.",
                    "Worked with Sqlite3 databases." ],
    },
  ];

  constructor() {}
}
