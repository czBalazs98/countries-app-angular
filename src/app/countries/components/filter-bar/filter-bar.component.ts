import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  selectedRegion: string = '';

  @Output()
  searchByNameEvent = new EventEmitter<string>();

  @Output()
  searchByRegionEvent = new EventEmitter<string>();

  searchInputControl: FormControl = new FormControl('');

  searchSubject = new Subject<string>();

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((value) => this.searchByNameEvent.emit(value));
  }

  triggerSearchByNameEvent() {
    this.searchSubject.next(this.searchInputControl.value);
  }

  triggerSearchByRegionEvent() {
    this.searchByRegionEvent.emit(this.selectedRegion);
  }
}
