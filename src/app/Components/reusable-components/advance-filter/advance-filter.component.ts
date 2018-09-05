import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { AdvanceFilter } from '../../../Interfaces/advance-filter';
import { AdvanceFilterService } from '../../../Services/advance-filter.service';
declare var $: any;
@Component({
  selector: 'advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.css'],
  providers: [{provide:AdvanceFilter,useClass:AdvanceFilterService}]
})
export class AdvanceFilterComponent implements OnInit, OnChanges {
  public faFilter = faFilter;
  public idleTime;
  public idleInterval;
  public selectedTagIndex;
  public autosuggest = [];
  public placeholder = "Apply Advance Filters";
  public li;
  public filter;
  public rect;
  public selectedLi = 0;
  public selectedCategory;
  public selectedSubCategory;
  public selectedOperation;
  public selectedValue;
  public tagItem;
  public closeBtn;
  public closeBtnIcon;
  public categoryItem;
  public categoryItemValue;
  public subCategoryInputItem;
  public subCategories;
  public operations;
  public values;
  public param;
  @ViewChild('suggestion_adv_box')ul: ElementRef;
  @ViewChild('tag_adv_list')tagList: ElementRef;
  @ViewChild('main_adv_input')mainInput: ElementRef;
  @Output('output')output = new EventEmitter<any>();
  @Input('input')categories;
  constructor(private renderer: Renderer2, private service: AdvanceFilter) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.categories && changes.categories.currentValue !== undefined) {
      this.updateData(changes.categories.currentValue);
    }
  }

  updateData(res) {
    this.categories = res.categories;
    if(this.categories){
    	this.param="mainInput";
    	this.renderer.listen(this.mainInput.nativeElement,'keydown',(event)=>{
    	   this.selectKey(event);
    	});
    }
  }

  selectKey(event) {
    let liSelected = this.li[this.selectedLi];
    if (event.keyCode === 13) {
      if(this.param=="mainInput"){
        this.selectedCategory = liSelected.innerText;
        this.makeTag();
      }else if(this.param=="subCategory"){
        this.selectedSubCategory = liSelected.innerText;
        this.completeSubCategory(event);
      }else if(this.param=="operation"){
        this.selectedOperation = liSelected.innerText;
        this.completeOperations(event);
      }else{
        console.log(this.param);
        //this.selectedValue = liSelected.innerText;
        //this.completeTag(event);
      }
    } else if (event.keyCode === 40) {
      this.idleTime = 0;
      liSelected.setAttribute('tabIndex', this.selectedLi);
      liSelected.focus();
      liSelected.classList.remove('selected');
      if (this.selectedLi < this.li.length - 1) {
      this.selectedLi++;
      } else {
      this.selectedLi = 0;
      }
      liSelected = this.li[this.selectedLi];
      liSelected.setAttribute('tabIndex', this.selectedLi);
      liSelected.classList.add('selected');
      liSelected.focus();
    } else if (event.keyCode === 38) {
      this.idleTime = 0;
      liSelected.setAttribute('tabIndex', this.selectedLi);
      liSelected.focus();
      liSelected.classList.remove('selected');
      if (this.selectedLi > 0) {
      this.selectedLi--;
      } else {
      this.selectedLi = this.li.length - 1;
      }
      liSelected = this.li[this.selectedLi];
      liSelected.setAttribute('tabIndex', this.selectedLi);
      liSelected.classList.add('selected');
      liSelected.focus();
    } else if (event.shiftKey && event.keyCode === 9) {
      event.preventDefault();
      this.autosuggest = [];
      this.selectedTagIndex = this.tagList.nativeElement.children.length - 1;
      this.editTag(this.tagList.nativeElement.lastChild.lastChild);
    } else {
      this.idleTime = 0;
      this.showSuggestions(event,this.categories);
    }
  }




  timerIncrement() {
    this.idleTime += 1;
    if (this.idleTime > 4) {
      this.selectedLi = 0;
      this.ul.nativeElement.style.display = 'none';
      this.autosuggest = [];
      this.mainInput.nativeElement.blur();
    }
  }


  stopTimer(){
    clearInterval(this.idleInterval);
  }

  startTimer(){
    this.idleTime = 0;
    this.idleInterval = setInterval(() => { this.timerIncrement(); }, 1000);
  }

  showSuggestions(event,autoSuggestData) {
    this.selectedLi = 0;
    this.ul.nativeElement.style.display = '';
    this.autosuggest = [];
    this.filter = event.target.value.toLowerCase();
    this.rect = event.target.getBoundingClientRect();
    for (let i = 0; i < autoSuggestData.length; i++) {
      // creating a list of keys for autosuggest
      if (autoSuggestData[i].label.toLowerCase().indexOf(this.filter) > -1) {
        this.autosuggest.push(autoSuggestData[i].label);
      } else {
        this.autosuggest.splice(i, 1);
      }
    }
    setTimeout(() => {
      this.li = this.ul.nativeElement.getElementsByTagName('li');
      if (this.li.length > 0) {
        this.li[0].classList.add('selected');
      }
    }, 0);
    // make idle time 0 and clear interval
    this.idleTime = 0;
    clearInterval(this.idleInterval);
    this.idleInterval = setInterval(() => { this.timerIncrement(); }, 1000);
  }

  makeTag(){
    // make idle time 0 and clear interval
      this.idleTime = 0;
      clearInterval(this.idleInterval);
      // making suggestion list empty
      this.autosuggest = [];
      // making input empty
      this.mainInput.nativeElement.value = '';
      // disabling main input
      this.mainInput.nativeElement.setAttribute('disabled', 'disabled');
      // creating tag li
      this.tagItem = this.renderer.createElement('li');
      this.renderer.addClass(this.tagItem, 'tag');
      // adding close button
      this.closeBtn = this.renderer.createElement('span');
      this.renderer.addClass(this.closeBtn, 'close-btn');
      this.renderer.listen(this.closeBtn, 'click', (event) => {
        this.removeTag(event);
      });
      this.closeBtnIcon = this.renderer.createText('x');
      this.renderer.appendChild(this.closeBtn, this.closeBtnIcon);
      // adding the selected key to li
      this.categoryItem = this.renderer.createElement('span');
      this.renderer.addClass(this.categoryItem, 'key');
      this.categoryItemValue = this.renderer.createText(this.selectedCategory + ': ');
      this.renderer.appendChild(this.categoryItem, this.categoryItemValue);
      // adding input for subkey
      this.subCategoryInputItem = this.renderer.createElement('input');
      this.renderer.listen(this.subCategoryInputItem, 'keydown', (event) => {
      this.selectKey(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'focus', (event) => {
        this.loadSubCategorySuggestions(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'click', (event) => {
        this.loadSubCategorySuggestions(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'input', (event) => {
        this.showSuggestions(event,this.subCategories);
      });
      // appending close button,selected key, input to the tag li
      this.renderer.appendChild(this.tagItem, this.closeBtn);
      this.renderer.appendChild(this.tagItem, this.categoryItem);
      this.renderer.appendChild(this.tagItem, this.subCategoryInputItem);
      // adding tag li to ul
      this.renderer.appendChild(this.tagList.nativeElement, this.tagItem);
      // focusing inner input
      this.subCategoryInputItem.focus();
      //make placeholder empty
      this.placeholder='';
  }



  loadSubCategorySuggestions(event) {
     this.service.getSubCategories(this.selectedCategory).subscribe(res=>{
     	this.subCategories = res.subCategories;
     	if(this.subCategories) {
     	 this.param="subCategory";
      	 this.showSuggestions(event,this.subCategories);
     	}
     });
  }

  loadOperationSuggestions(event) {
     this.service.getOperations(this.selectedCategory,this.selectedSubCategory).subscribe(res=>{
     	this.operations = res.operations;
     	if(this.operations) {
     	 this.param="operation";
      	 this.showSuggestions(event,this.operations);
     	}
     });
  }

  loadValueSuggestions(event) {
     this.service.getValues(this.selectedCategory,this.selectedSubCategory,this.selectedOperation).subscribe(res=>{
     	this.values = res.values;
     	if(this.values==null)
             this.completeTag(event);
          else {
          	  this.param="value";
     	  this.showSuggestions(event,this.values);
          }
     });
  }

  completeSubCategory(event){
      this.renderer.removeChild(this.tagItem, this.subCategoryInputItem);
      this.categoryItem = this.renderer.createElement('span');
      this.renderer.addClass(this.categoryItem, 'key');
      this.categoryItemValue = this.renderer.createText(this.selectedSubCategory + ':');
      this.renderer.appendChild(this.categoryItem, this.categoryItemValue);
      // adding input for subkey
      this.subCategoryInputItem = this.renderer.createElement('input');
      this.renderer.listen(this.subCategoryInputItem, 'keydown', (event) => {
      this.selectKey(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'focus', (event) => {
        this.loadOperationSuggestions(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'click', (event) => {
        this.loadOperationSuggestions(event);
      });
      // appending,selected key, input to the tag li
      this.renderer.appendChild(this.tagItem, this.categoryItem);
      this.renderer.appendChild(this.tagItem, this.subCategoryInputItem);

      this.subCategoryInputItem.focus();
  }

  completeOperations(event){
    this.renderer.removeChild(this.tagItem, this.subCategoryInputItem);
      this.categoryItem = this.renderer.createElement('span');
      this.renderer.addClass(this.categoryItem, 'key');
      this.categoryItemValue = this.renderer.createText(this.selectedOperation + ':');
      this.renderer.appendChild(this.categoryItem, this.categoryItemValue);
      // adding input for subkey
      this.subCategoryInputItem = this.renderer.createElement('input');
      this.renderer.listen(this.subCategoryInputItem, 'keydown', (event) => {
      this.selectKey(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'focus', (event) => {
        this.loadValueSuggestions(event);
      });
      this.renderer.listen(this.subCategoryInputItem, 'click', (event) => {
        this.loadValueSuggestions(event);
      });
      // appending,selected key, input to the tag li
      this.renderer.appendChild(this.tagItem, this.categoryItem);
      this.renderer.appendChild(this.tagItem, this.subCategoryInputItem);

  }

  editTag(event){
    console.log('edit Tag')
  }

  removeTag(event){
    console.log('remove Tag')	
  }

  completeTag(event){
    console.log(event.target);
  } 


}
