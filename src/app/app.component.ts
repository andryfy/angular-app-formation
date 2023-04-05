import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';

  currentDate = new Date()

  user = {
    nom: 'Mark Karl',
    isConnected: true,
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi et voluptas, cumque modi veritatis provident ullam dolores sit! Placeat eos accusantium ut sint distinctio suscipit voluptatibus mollitia excepturi alias',
  };

  onButtonClick() {
    this.user.isConnected = !this.user.isConnected;
  }

  todoList: any[] = [
    {
      id: 1,
      nom: "Reveil",
      description: "Mifoha maraina amin'ny 5h",
      isDone: true
    },
    {
      id: 2,
      nom: "Fisafoanana",
      description: "Misakafo maraina café sy mofo",
      isDone: true
    },
    {
      id: 3,
      nom: "Fiomanana miasa",
      description: "Miomana handeha hiasa amin'ny 5h30",
      isDone: false
    },
    {
      id: 4,
      nom: "Fandehanana miasa",
      description: "Mandeha miasa amin'ny 6h maka bus eny amin'ny arrêt",
      isDone: false
    }
  ]
}
