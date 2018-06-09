import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  	constructor(public httpClient: HttpClient) {
    	console.log('Hello RestProvider Provider');
  	}

  	private apiUrl = 'http://localhost:8000/api/';

}
