import { Component, OnInit } from '@angular/core';
import { Logbook } from '../../model/model.logbook';
import { LogbookService} from '../logbook/logbook.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.scss']
})
export class LogbookComponent implements OnInit {
  logbookFormBuilder:any;
  logbookGroup:FormGroup;

  logbooks: Logbook[];
  displayedColumns: string[] = ['creation_date', 'title', 'description'];
  
  constructor(private logbookService :LogbookService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.logbookGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getAll();
  }

  getAll(){
    this.logbookService.getAll().subscribe(
      (data: Logbook[]) => {
        this.logbooks = data;
      },
      error => {
        console.log("error get all logbooks");
      }
    )
  }

  onSubmit(){
    this.logbookService.create(this.title.value, this.description.value);
  }

  get title() {
    return this.logbookGroup.get('title');
  }

  get description() {
    return this.logbookGroup.get('description');
  }
  
}


