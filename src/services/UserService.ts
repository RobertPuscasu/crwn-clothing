import axios from 'axios';
import { Observable, from } from 'rxjs';
import { endpoints } from './endpoints'
import { map } from 'rxjs/operators';
import { IAuthenticatedUser } from 'src/interfaces/models/auth-user.model';

export class UserService {

  create(user: IAuthenticatedUser): Observable<IAuthenticatedUser> {
    return from(axios.post<IAuthenticatedUser>(`${endpoints}`, user))
    .pipe(
      map(res => res.data)
      );
  }
}
