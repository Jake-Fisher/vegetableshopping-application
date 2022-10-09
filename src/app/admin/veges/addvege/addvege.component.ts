import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Vege } from '../../../model/Vege';
import { HttpClientService } from '../../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addvege',
  templateUrl: './addvege.component.html',
  styleUrls: ['./addvege.component.css']
})
export class AddvegeComponent implements OnInit {

  @Input()
  vege: Vege;

  @Output()
  vegeAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveVege() {
    if (this.vege.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/veges/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addVege(this.vege).subscribe(
            (vege) => {
              this.vegeAddedEvent.emit();
              this.router.navigate(['admin', 'veges']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
    }else {
      this.httpClientService.updateVege(this.vege).subscribe(
        (vege) => {
          this.vegeAddedEvent.emit();
          this.router.navigate(['admin', 'veges']);
        }
      );
    }
  }
}