import { Component, OnInit } from "@angular/core";
import { WorkExperience } from "../models/models";

@Component({
  selector: "work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: "Software Development Engineer",
      company: "Amazon",
      duration: "Feb 2022 - Current",
      description: [
        "Streamlined customer account workflow through AWS Lambda, S3, CodeCommit, and Reverse Pica-Pica with CDK and Java, achieving a notable automation improvement and substantial developer hour savings.",
        "Formulated dynamic dashboards, runbooks, and detailed reports, leading to over 20% improvement in monitoring post successful testing and deployment of changes.",
        "Boosted teams operational efficiency by 30% via on-call tools for automated operational event handling.",
        "Fortified security measures through consistent, rigorous 7-day on-call rotation, signifi- cantly mitigating risks while implementing over 20 new alarms.",
        "Pioneered an alternative to CloudWatch Insights, boosting system fault tolerance by effi- ciently monitoring customer impact during unexpected service downtime. Incorporated gov- ernment regions support into design, ensuring inclusivity and utilizing key AWS technologies such as S3, AWS logs, Lambda, Athena, QuickSight and SNS.",
        "Identified and promptly addressed significant gaps in monitoring by adding required alarms and introducing new metrics for enhanced surveillance.",
        "Collaborated in a team to manage the AWS CloudWatch Contributor Insights service.",
      ],
    },
    {
      role: "Software Engineer",
      company: "TCS",
      duration: "March 2021 - Feb 2022",
      description: [
        "Established robust MVC and modular structures, significantly propelling workflow devel- opment efficiency for large-scale projects with more than 50 modules.",
        "Developed innovative, user-friendly web applications using Java, HTML5, CSS3, Angu- lar ExpressJS and NodeJS that reached over 100,000 global users.",
        "Managed database access, introduced efficient procedures for handling 1M+ MongoDB records.",
        "Spearheaded the prototyping of an end-to-end application, integrating Spring Frame- work, Spring Batch, and Angular for seamless operations to serve a broad user base.",
        "Actively participated in AGILE SCRUM methodology, engaging in key SDLC phases such as requirements gathering, analysis, design, development, and thorough testing.",
      ],
    },
    {
      role: "Software Engineer",
      company: "State of New York",
      duration: "Jan 2019 - Feb 2021",
      description: [
        "Automated enrollment processes achieving a remarkable accuracy rate of 99% through the creation and execution of Windows PowerShell scripts.",
        "Led the design and development of a unique department portal using Angular 5, Node JS, MySQL, Typescript, HTML5, CSS3, Bootstrap, and Angular-Material.",
        "Implemented TypeScript components/services for REST API consumption, managing data from 15+ endpoints in accordance with Angular's Component-based architecture.",
        "Pioneered and developed a high-impact web application using Angular, enabling seam- less posting of CSV and Txt files to Azure Blob storage. Engineered custom directives using Angular JS.",
      ],
    },
    {
      role: "Software Developer",
      company: "AIESEC",
      duration: "Sep 2002 - Mar 2004",
      description: [
        "Developed Java-powered web applications using HTML5, CSS3, and frameworks such as Spring MVC and Apache Struts. Integrated Angular, ExpressJS, and NodeJS for dynamic and sophisticated frontend experiences.",
        "Managed database access and optimized the handling of 1 million+ MongoDB records in Java. Applied advanced MongoDB drivers and optimization techniques to ensure superior data processing performance.",
        "Contributed to the prototyping of an end-to-end application, integrating Spring Frame- work, Spring Batch, and Angular works like Spring MVC, Spring Batch, and Angular. The focus was on ensuring smooth operations for a diverse user base through technology-driven solutions.",
        "implemented robust MVC and moular structures in Java, using frameworks like Spring MVC, Spring Batch and Apache Struts to enhance workflow efficiency, especially for projects with more modules.",
      ],
    },
    {
      role: "Software Developer",
      company: "Rashtriya Ispat Nigam Limited - Vizag Steel Plant",
      duration: "April 2016 - June 2016",
      description: [
        "Supported the development of end-to-end solutions with Spring Framework and Angular, aiding in efficiency improvements.",
        "Assisted in optimizing SQL operations for enhanced data management under senior guidance.",
        "Contributed to database performance tuning using Spring JDBC and stored procedures. Participated in full-stack web development projects, learning Java, HTML to contribute to front-end and back-end improvements.",
        " Supported MongoDB programming efforts, helping streamline data processing tasks. Collaborated on code refinement tasks, focusing on user experience enhancements under mentorship.",
        "Aided in the implementation of MVC architecture, contributing to the workflow's efficiency and scalability.",
        "Engaged in all phases of the SDLC, gaining hands-on experience with Agile methodolo- gies in a supportive role.",
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
