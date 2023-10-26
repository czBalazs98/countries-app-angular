import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  
  regions: string[] = environment.regions;

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
    this.selectedRegion = '';
  }

  triggerSearchByRegionEvent() {
    this.searchByRegionEvent.emit(this.selectedRegion);
    this.searchInputControl.setValue('');
  }
}
