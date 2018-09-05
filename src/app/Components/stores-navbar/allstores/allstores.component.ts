import { Component, OnInit } from '@angular/core';
import { Collection } from '../../../Interfaces/collection';
import { AdvanceFilterConfig, AllStoresTableConfig, BaseLineInformation } from '../../../Config/config';
import { StoresCollection } from '../../../Services/collection.service';

@Component({
  selector: 'app-allstores',
  templateUrl: './allstores.component.html',
  styleUrls: ['./allstores.component.css'],
  providers: [{ provide: Collection, useClass: StoresCollection }]
})
export class AllstoresComponent implements OnInit {
  public tableConfig;
  public storesCollection;
  public filterConfig;
  public advanceFilterConfig;
  public fields_displayed = [];
  constructor(private collection: Collection) { }

  ngOnInit() {
    this.storesCollection = this.collection;
    this.setTableConfig();
    this.setBasicFilterConfig();
    this.setAdvanceFilterConfig();
  }

  setTableConfig() {
    this.tableConfig = AllStoresTableConfig;
  }

  setBasicFilterConfig() {
    this.filterConfig = this.tableConfig.columnNames;
  }

  setAdvanceFilterConfig(){
    this.advanceFilterConfig = AdvanceFilterConfig;
  }

  filterData(event) {
    this.tableConfig.isFiltered = true;
    this.tableConfig.filter = event;
    this.tableConfig = Object.assign({}, this.tableConfig);
  }

  filterAdvanceData(event) {
    console.log(event);
  }


  fieldsDisplayed(event) {
    this.fields_displayed = event;
  }
}
