import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable, share } from 'rxjs';
import { SafeHtmlPipe } from '../../pipes/safeHtml';
import { RouterLink } from '@angular/router';

export interface Vacancy {
  readonly description: string;
  readonly title: string;
  readonly id: string;
}

@Component({
  selector: 'virtual-interviewer-vacancy',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SafeHtmlPipe, RouterLink],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.scss',
})
export class VacancyComponent {
  public readonly vacancy$ = this.getVacancy().pipe(share());

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getVacancy(): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>('https://virtual-job-interview-api.dev.rabota.ua/vacancy/9758162')
        .pipe(map((vacancy: Vacancy) => ({
            ...vacancy,
            description: vacancy.description
                .replace(/<pre>/g, '<p class="tw-plain-markup tw-py-20 tw-break-words">')
                .replace(/<\/pre>/g, '</p>')
                .replace(/\?\?/g, '<br>')
                .replace(/nofollow noopener noreferrer/g, 'nofollow'),
        })));
  }
}
