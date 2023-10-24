import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {

  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  selectedRegion?: string;

  @Output()
  searchEvent = new EventEmitter<string>();

  searchInputControl: FormControl = new FormControl('');

  triggerSearchEvent() {
    this.searchEvent.emit(this.searchInputControl.value);
  }

}
