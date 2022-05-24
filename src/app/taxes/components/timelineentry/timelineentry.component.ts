import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timelineentry',
  templateUrl: './timelineentry.component.html',
  styleUrls: ['./timelineentry.component.css']
})
export class TimelineentryComponent  {
  @Input() timeEntryHeader: string;
  @Input() timeEntryContent: string;
  @Input() timeEntryDescription: string;

  @Input() timeEntryPlace: string;


}
