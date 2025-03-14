import { Component } from '@angular/core';
import { AdnanServiceService } from '../service/adnan-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _url: AdnanServiceService, private _active: ActivatedRoute) { }

  productid: any;
  categoryid: any;

  ngOnInit() {
    
    this.categoryid = this._active.snapshot.paramMap.get("id");
    this.get();
  }

  get() {
   
      this._url.getProduct(this.categoryid).subscribe((data) => {
        this.productid = data.filter((x: any) => x.categoryid == this.categoryid);
    });
  }
}
