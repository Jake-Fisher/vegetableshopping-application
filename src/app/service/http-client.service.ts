import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../model/User ';
import { Vege } from '../model/Vege';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
  }
  
  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
  getVeges() {
    return this.httpClient.get<Vege[]>('http://localhost:8080/veges/get');
  }

  addVege(newVege: Vege) {
    return this.httpClient.post<Vege>('http://localhost:8080/veges/add', newVege);
  }

  deleteVege(id) {
    return this.httpClient.delete<Vege>('http://localhost:8080/veges/' + id);
  }

  updateVege(updatedVege: Vege) {
    return this.httpClient.put<Vege>('http://localhost:8080/veges/update', updatedVege);
  }
}
