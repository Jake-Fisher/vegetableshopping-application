import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Vege } from 'src/app/model/Vege';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewvege',
  templateUrl: './viewvege.component.html',
  styleUrls: ['./viewvege.component.css']
})
export class ViewvegeComponent implements OnInit {

  @Input()
  vege: Vege;

  @Output()
  vegeDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }

  ngOnInit(): void {
  }

  deleteVege() {
    this.httpClientService.deleteVege(this.vege.id).subscribe(
      (vege) => {
        this.vegeDeletedEvent.emit();
        this.router.navigate(['admin', 'veges']);
      }
    );
  }

  editVege() {
    this.router.navigate(['admin', 'veges'], { queryParams: { action: 'edit', id: this.vege.id } });
  }

}
