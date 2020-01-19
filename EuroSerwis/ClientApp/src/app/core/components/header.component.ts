import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'es-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent {

  constructor() {}
}
