import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Stock } from '../../model/model.stock';
import { StockService} from '../stock/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stockGroup:FormGroup;

  stocks:Stock[];

  displayedColumns: string[] = ['name', 'quantity', 'unit'];
  constructor(private stockService :StockService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.stockGroup = this.formBuilder.group({
          name: ['', Validators.required],
          quantite: [0, Validators.required],
          unit: ['', Validators.required],
      });
      this.getAll();
  }

  getAll(){
    this.stockService.getAll().subscribe(
      (data: Stock[]) => {
        this.stocks = data;
      },
      error => {
      }
    )
  }

  onSubmit(){
      if (this.stockGroup.invalid) {
          return;
      } else {
          this.stockService.createStock(this.name.value, this.quantite.value, this.unit.value);
      }
  }

  delete(stock:Stock){

  }

  add(stock:Stock){
    
  }
  
  get name() {
    return this.stockGroup.get('name');
  }

  get quantite() {
    return this.stockGroup.get('quantite');
  }

  get unit() {
    return this.stockGroup.get('unit');
  }
}
