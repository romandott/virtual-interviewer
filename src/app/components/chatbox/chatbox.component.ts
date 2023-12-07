import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'virtual-interviewer-chatbox',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
})
export class ChatboxComponent {
  public readonly vacancyId$: Observable<string | null> = this.getVacancyId()

  public constructor(public readonly route: ActivatedRoute) {
    console.log(route)
  }

  private getVacancyId(): Observable<string | null> {
    return this.route.paramMap.pipe(map(params => params.get('id')))
  }
}
