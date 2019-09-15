import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {
  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {}

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 10 })
    .pipe(map((res) => res.data));
}
