import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from "./component/layout/layout.component";
import { DialogFormComponent } from "./component/dialog-form/dialog-form.component";
import { PageContainerComponent } from "./component/page-container/page-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, LayoutComponent, DialogFormComponent, PageContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarShowroom';

}
