import { Observable } from 'rxjs';
const base_url = "http://localhost:8003";

export abstract class AdvanceFilter {
  url:string;
  constructor(url){
    this.url=base_url+url;
  }
  abstract getSubCategories(category):Observable<any>;
  abstract getOperations(category,subCategory):Observable<any>;  
  abstract getValues(category,subCategory,operation):Observable<any>;
}