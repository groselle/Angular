import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() { // A lifecycle method.
    this.getValues(); // This is called when this lifecycle method first runs.
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response; // Store the response inside the values var.
    }, error => {
      console.log(error); // Print error, if it exists.
    });
  }
}
