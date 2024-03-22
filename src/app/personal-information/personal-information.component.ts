import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Anudeep Balla'],
    ['DOB', '10/07/1996'],
    ['Work Exp', '7+ Years'],
    ['Education', 'M.S'],
    ['Interests', 'Reading Books'],
  ];

  aboutMe: string[] = [
    'With a masters degree in Computer Science from SUNY Polytechnic Institute and a bachelor\'s degree, I have a strong academic background and a passion for learning new technologies and solving complex problems.',
'As a Software Development Engineer at Amazon, I design and develop large-scale distributed systems, using Java, Python, Node.js, DynamoDB, MySQL, and AWS services and tools. I specialize in backend development, operational excellence, and AI-based solutions, ensuring scalability, reliability, and performance of the products I work on.',
'I have a strong experience in Software Development, working with diverse technologies and domains. I have built web applications, department portals, and automated processes, using Angular, JavaScript, HTML, CSS, and MEAN Stack. I have also implemented TypeScript components and services, custom directives, and reusable libraries, enhancing code modularity and quality.',
'I am a certified Angular Developer, and I have skills in REST API consumption, data handling, and component-based architecture. I aim to deliver high-quality products that meet customer needs and expectations, and I value collaboration, contribution, and support with my team and organization.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
