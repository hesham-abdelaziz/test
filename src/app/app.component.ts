import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COTest';
  isLoading = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
    
  }
}
