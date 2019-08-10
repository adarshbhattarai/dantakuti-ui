import { Observable } from 'rxjs';

export interface Sewa {
  name: string;
  picture: string;
  cost: string;
  description: string;
  shortDesc: string
}

export abstract class ServiceData {
  abstract getServices(): Observable<Sewa[]>;
}