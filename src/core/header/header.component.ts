import {Component, EventEmitter, Output} from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';
import {DataStorageService} from '../../app/shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../app/auth/auth.service';
import {HttpEvent} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dss: DataStorageService, private authService: AuthService) {}

  onSaveData() {
    this.dss.storeRecipes().subscribe(
      (reponse: HttpEvent<Object>) => {
        console.log(reponse);
      }
    );
  }

  onFetchData() {
    this.dss.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
