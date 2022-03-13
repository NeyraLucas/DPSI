import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { SignInData } from '../models/SignInData.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  private sessionLifeHook: Subject<void> = new Subject<void>();
  constructor(
    private authFire: AngularFireAuth,
    private authFirestore: AngularFirestore,
    private readonly router: Router
  ) {
    this.checkUSerPersistence();
  }


    //check persistence
    private checkUSerPersistence(): void {
      this.authFire.authState
        .pipe(takeUntil(this.sessionLifeHook))
        .subscribe((usePersistenceSession) => {
          if (usePersistenceSession) {
            this.defineUser(usePersistenceSession!.uid);
          } else {
            this.sessionLifeHook.next();
          }
        });
    }

  public async login(data: SignInData): Promise<void> {
    return this.authFire
      .signInWithEmailAndPassword(data.email, data.password)
      .then((UserCredential) => {
        this.defineUser(UserCredential.user!.uid);
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  public defineUser(uid: string): void {
    this.authFirestore
      .doc<User>(`/users/${uid}`)
      .valueChanges({ idField: 'uid' })
      .pipe(takeUntil(this.sessionLifeHook))
      .subscribe({
        next: (user) => {
          const definedUser: User = user!;
          if (definedUser) {
            this.definedAndReroute(definedUser);
          }
        },
      });
  }

  //User roles
  private definedAndReroute(user: User): void {
    this.user$.next(user);
    //condicion de los roles
    if (user.roles.admin) {
      //admin
      this.router.navigate(['admin']);

    } else {
      this.SafelogOut();
    }
  }

  //logOut
  public async SafelogOut(): Promise<void> {
    try {
      await this.authFire.signOut().then(() => {
        this.user$.next(null);
        this.sessionLifeHook.next();
        this.router.navigate(['/']);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
