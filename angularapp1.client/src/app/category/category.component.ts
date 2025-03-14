import { Component } from '@angular/core';
import { AdnanServiceService } from '../service/adnan-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private _url: AdnanServiceService) { }

  ngOnInit() { this.get(); }

  categoryid: any;

  get() {

    this._url.getCategory().subscribe((data) => {
      this.categoryid = data;
    });
  }

}
