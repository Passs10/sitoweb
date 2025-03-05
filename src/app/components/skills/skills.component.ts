import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  imports: [RouterModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', img: 'assets/images/angular.png' },
    { name: 'Spring', img: 'assets/images/icons8-spring-boot-48.png' },
    { name: 'JavaScript', img: 'assets/images/javascript.png' },
    { name: 'Figma', img: 'assets/images/7564187_figma_logo_brand_icon.png' },
    { name: 'Java', img: 'assets/images/icons8-java-48.png' },
    { name: 'Python', img: 'assets/images/4375050_logo_python_icon.png' },
    { name: 'C', img: 'assets/images/pngegg.png' },
    { name: 'C++', img: 'assets/images/7564189_c_logo_plus plus_plus_+ +_icon.png' },
    { name: 'MySQL', img: 'assets/images/1012821_code_development_logo_mysql_icon.png' },
    { name: 'Git', img: 'assets/images/2993773_git_social media_icon.png' },
    { name: 'GitHub', img: 'assets/images/211904_social_github_icon.png' },
    { name: 'Office', img: 'assets/images/4375020_logo_office_icon.png' }
  ];    
}
