import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdvanceFilter} from '../Interfaces/advance-filter';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdvanceFilterService extends AdvanceFilter{

  constructor(private http:HttpClient, private _route: ActivatedRoute, private router:Router) { 
  	super("/advFilter");
  }

  getSubCategories(category):Observable<any>{
    const data = {'category':category};
    return this.http.get('/assets/api/GetSubCategoriesForFilter.json');
    //return this.http.post(this.url,data);
  }

  getOperations(category,subCategory):Observable<any>{
    const data = {'category':category,'subCategory':subCategory};
    return this.http.get('/assets/api/GetOperationsForFilter.json');
    //return this.http.post(this.url,data);
  }

  getValues(category,subCategory,operation):Observable<any>{
    const data = {'category':category,'subCategory':subCategory,'operation':operation};
    return this.http.get('/assets/api/GetValuesForFilter.json');
    //return this.http.post(this.url,data);
  }

}
