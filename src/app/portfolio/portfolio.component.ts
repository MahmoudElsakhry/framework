import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  img1:string = "../../assets/img/2.png"
  img2:string = "../../assets/img/2.png"
  img3:string = "../../assets/img/3.png"

  image1 (){
    let x = document.querySelector('.portfolioLayer')
    x?.classList.remove('d-none')
    
    let y = document.querySelector('.item img')
    
    console.log(y);
    
    
    
    // this.img1 = `${Src}`


    
  }
  close(){
    let x = document.querySelector('.portfolioLayer')
    x?.classList.add('d-none')
  }
}
