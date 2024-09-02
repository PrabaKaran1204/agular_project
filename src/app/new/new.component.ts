import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  movies = [
    { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', releaseYear: 2010 },
    { id: 2, title: 'The Matrix', description: 'A computer hacker learns about the true nature of his reality.', releaseYear: 1999 },
    { id: 3, title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', releaseYear: 2014 },
    { id: 4, title: 'The Dark Knight', description: 'Batman raises the stakes in his war on crime.', releaseYear: 2008 },
    // Add more movies as needed
  ];


}
