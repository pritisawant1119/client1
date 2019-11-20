import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 emp;
  constructor(public http:HttpClient) 
  { 

  }
  GetData()
  {
    return this.http.get("http://200.0.1.230:4001/employees");
  }
  AddData(emp)
  {
   return this.http.post("http://200.0.1.230:4001/employees",emp);
  }
  delete(no)
  {
    return this.http.delete("http://localhost:4000/employees/"+no);
  }
  getdatabyid(no)
  {
    return this.http.get("http://localhost:4000/employees/"+no);
  }
  
  update(emp)
  {
    return this.http.put("http://localhost:4000/employees/"+emp.no,emp);
  }

  }

