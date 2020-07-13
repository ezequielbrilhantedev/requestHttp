import { Component, OnInit } from '@angular/core';
import { HttpCrudService } from 'src/app/service/http-crud.service';
import { Posts } from 'src/app/models/posts.models';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.scss']
})
export class HttpComponentComponent implements OnInit {
  posts: Posts = new Posts;
  erro: any;

  constructor(private httpCrudService: HttpCrudService) {
    this.getLivros();
  }

  ngOnInit(): void {
  }

  getLivros() {
    this.httpCrudService.getService().subscribe(
      (data: Posts) => {
        this.posts = data;
        console.log('O data que recebemos', data);
        console.log('A variavel que preenchemos', this.posts);
      },
      error => {
        this.erro = error;
        console.log('ERROR: ', error);
      }
    );
  }

}
