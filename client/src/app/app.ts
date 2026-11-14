import { Component, Inject, OnInit, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private httpClient = inject(HttpClient);
  protected readonly title = signal('Dating App');
  protected readonly users = signal<any[]>([]); 
   ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.users.set(response as any[]);
      console.log(response);
    });
  }
}
