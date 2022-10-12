import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Vege } from '../model/Vege';

@Component({
  selector: 'app-shopvege',
  templateUrl: './shopvege.component.html',
  styleUrls: ['./shopvege.component.css']
})
export class ShopvegeComponent implements OnInit {

  veges: Array<Vege>;
  vegesRecieved: Array<Vege>;

  cartVeges: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getVeges().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartVeges = JSON.parse(data);
    } else {
      this.cartVeges = [];
    }
  }

  // we will be taking the veges response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.veges = new Array<Vege>();
    //get veges returned by the api call
    this.vegesRecieved = response;
    for (const vege of this.vegesRecieved) {

      const vegewithRetrievedImageField = new Vege();
      vegewithRetrievedImageField.id = vege.id;
      vegewithRetrievedImageField.name = vege.name;
      //populate retrieved image field so that vegetaable image can be displayed
      vegewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + vege.picByte;
      vegewithRetrievedImageField.seller = vege.seller;
      vegewithRetrievedImageField.price = vege.price;
      vegewithRetrievedImageField.picByte = vege.picByte;
      this.veges.push(vegewithRetrievedImageField);
    }
  }

  addToCart(vegeId) {
    //retrieve vege from veges array using the vege id
    let vege = this.veges.find(vege => {
      return vege.id === +vegeId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected vege to cart data
    cartData.push(vege);
    //updated the cartVeges
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the vege added to cart as true
    vege.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartVeges = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartVeges = [];
    localStorage.clear();
  }
}