import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
@ViewChild('addBookFormDirective', {static: false}) addBookFormDirective;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      uid: ['', Validators.required],
      edition: ['', [Validators.required]],
      rack_number: ['', Validators.required]
  });
  console.log("Random", Math.random().toString(36).substr(2,9));
  let uniqueId = Math.random().toString(36).substr(2,9);
  this.addBookForm.get('uid').setValue(uniqueId);
  }
  get f() { return this.addBookForm.controls; }
  onSubmit() {
        // stop here if form is invalid
    if (this.addBookForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addBookForm.value))
    console.log("CHECK", this.addBookForm.value);
    this.httpClient.post("http://localhost:3000/books", this.addBookForm.value).subscribe((data:any[]) => {
      console.log("DATA", data);
      this.addBookFormDirective.resetForm();
    })
  }
  getProfile(){
    this.httpClient.get("http://localhost:3000/books").subscribe((data:any[]) => {
      console.log("GET DATA", data);
    })
  }
}
