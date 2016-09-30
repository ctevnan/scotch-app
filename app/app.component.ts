import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">My Angular 2 App</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="jumbotron">
        <h1>Welcome to our app</h1>
        <p>{{ message }}</p>
      </div>

      <div *ngFor="let user of users">
        {{ user.name }} ({{ user.username }})
      </div>
    </main>

    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]  
})
export class AppComponent {
  message = 'Hello';
  users = [
    { id: 29, name: 'Carolyn', username: 'ctevs' },
    { id: 30, name: 'Declan' username: 'cmdironb'},
    { id: 31, name: 'George' username: 'bosssauce'}
  ];
}