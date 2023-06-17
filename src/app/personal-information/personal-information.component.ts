import { Component } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Nikhita Garg'],
    ['DOB', '10/01/2002'],
    ['Education', 'Btech in Computer Science(2024)'],
    ['Work Exp', '3 Months'],
    ['Interests', 'Painting']
  ];

  aboutMe: string[] = [
    "Hello, My name is Nikhita Garg and currently I am completeing my prefinal year of Btech in computer science from Vellore Institute of Technology(VIT) BHopal.",
    "I am a Backend CDeveloepr in python. I have worked with both flask and Django. I have done 2 internships as a backend developer in Django",
    "I am a Tech enthusiast who is eager to learn new technologies"
  ];
}
