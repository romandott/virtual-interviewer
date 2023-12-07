import { Injectable } from '@angular/core';
import { SignalrClient, SignalrConnection } from 'ngx-signalr-websocket';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private readonly client: SignalrClient
  private connection!: SignalrConnection

  public constructor(private readonly httpClient: HttpClient) {
    this.client = SignalrClient.create(httpClient)

  }

  public async start(): Promise<void> {
    if (this.connection) {
      return
    }
    this.connection = await firstValueFrom(this.client.connect('https://virtual-job-interview-api.dev.rabota.ua/hub'))
  }

  public on<T>(eventName: string): Observable<T[]> {
    return this.connection.on(eventName)
  }
}
