import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { SafeHtmlPipe } from '../../pipes/safeHtml';

export interface Vacancy {
  readonly description: string;
}

@Component({
  selector: 'virtual-interviewer-vacancy',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SafeHtmlPipe],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.scss',
})
export class VacancyComponent {
  public readonly vacancy$ = this.getVacancy().pipe(share());

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getVacancy(): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>('https://virtual-job-interview-api.dev.rabota.ua/vacancy/9758162');
  }
}
