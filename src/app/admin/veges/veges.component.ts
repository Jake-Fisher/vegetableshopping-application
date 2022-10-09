import { Component, OnInit } from '@angular/core';
import { Vege } from 'src/app/model/Vege';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veges',
  templateUrl: './veges.component.html',
  styleUrls: ['./veges.component.css']
})
export class VegesComponent implements OnInit {

  veges: Array<Vege>;
  action: string;
  selectedVege: Vege;
  vegesRecieved: Array<Vege>;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
   }

   refreshData()
   {
    this.httpClientService.getVeges().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
	// get the parameter id. this will be the id of the book whose details 
	// are to be displayed when action is view.
	const id = params['id'];
	// if id exists, convert it to integer and then retrive the book from
	// the books array
        if (id) {
          this.selectedVege = this.veges.find(vege => {
            return vege.id === +id;
          });
        }
      }
    );
   }
 
   // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.veges = new Array<Vege>();
    //get veges returned by the api call
    this.vegesRecieved = response;
    for (const vege of this.vegesRecieved) {
    
      const vegewithRetrievedImageField = new Vege();
      vegewithRetrievedImageField.id = vege.id;
      vegewithRetrievedImageField.name = vege.name;
      //populate retrieved image field so that book image can be displayed
      vegewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + vege.picByte;
      vegewithRetrievedImageField.seller = vege.seller;
      vegewithRetrievedImageField.price = vege.price;
      vegewithRetrievedImageField.picByte=vege.picByte;
      this.veges.push(vegewithRetrievedImageField);
    }
  }

   addVege() {
    this.selectedVege = new Vege();
    this.router.navigate(['admin', 'veges'], { queryParams: { action: 'add' } });
  }

  viewVege(id: number) {
    this.router.navigate(['admin', 'veges'], { queryParams: { id, action: 'view' } });
  }

}