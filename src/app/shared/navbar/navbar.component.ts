import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map } from 'rxjs/operators';
import { MenuInterface } from 'src/app/interfaces/menu.interface.';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {


  public menu!:MenuInterface[];

  public titulo: string='';
  public tituloSub$!: Subscription;

  constructor(private router: Router,private menuService:MenuService) {
    this.menu=menuService.menu;
    this.getDataFromRoute()
      .subscribe(
          ({ titulo }) => {
           this.titulo = titulo
        //   document.title = `AdminPro - ${titulo}`;//aplica el titulo a la pestaña de la pagina
        });
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getDataFromRoute(): Observable<any> {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild == null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }
}