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
    // Please be care to not fetch too much, but this amount lets us see the img lazy loading in action
    .fetch({ limit: 30 })
    .pipe(map((res) => res.data.launchesPast));
}
