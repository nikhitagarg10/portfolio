import { Component } from '@angular/core';
import {Education} from '../models/models'

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
 educationList: Education[] = [
      {
        institute: "Vellore Institute of Technology Bhopal",
        course: "Bachelors in computer science",
        duration: "4 years",
        score: "8.32",
      },
      {
        institute: "Deen Bandhu Public School",
        course: "11th and 12th",
        duration: "2 years",
        score: "92",
      },
      {
        institute: "The khaitan School",
        course: "school",
        duration: "2011-2018",
        score: "92.4",
      } 
 ]
}
