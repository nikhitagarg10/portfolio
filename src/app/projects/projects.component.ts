import { Component } from '@angular/core';
import { Project } from '../models/models'

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Fragrance E-Commerce website",
      technologies: "Django, SQLite Database, HTML/CSS, JavaScript, Bootstrap",
      description: ["An online e-store for perfumes with User Authentication, Cart and Order system",
                    "Password reset through Email-OTP using send_email",
                    "Product rating system, filter system(price, brand, type) and search bar",
                    "Navigating each product to its individual page.",
                    "Enhanced User Experience by classifying each product as floral, woody, celebrity etc."]
    },
    {
      title: "Rubix Cube Solver",
      technologies: "Python(NumPy), Python(OpenCV), Kociemba, Colorama",
      description: ["Live Rubix Cube solving using Kociemba Library",
                    "User displays each side of cube live and colors are detected using OpenCV"]
    },
    {
      title: "Virtual Assistant",
      technologies: "Flask, HTML, CSS, JavaScript",
      description: ["It works on both speech and text",
                    "It can tell date, time, click selfies, take screenshots, play songs and search answers on google"]
    },
    {
      title: "Blog",
      technologies: "PySimpleGUI, speech_recognition, playsound, gTTS(google text to speech)",
      description: ["basic social media website, with full user sign-up/ login/ logout authentication.",
                    "Here we can create post, update and delete posts, like and dislike and comment on posts",
                    "We have your our own profile wherein we can view our activity"]
    },
    {
      title: "MAUSAM(Weather app)",
      technologies: "Flask, HTML, CSS",
      description: ["A simple weather app that is made using a simple web API"]
    },
    {
      title: "Todo List",
      technologies: "Flask, HTML, CSS",
      description: ["A todo list app"]
    },
  ]
}
