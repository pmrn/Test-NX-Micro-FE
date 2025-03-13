import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsComponent } from '@menago/ui-components';

@Component({
  imports: [CommonModule, UiComponentsComponent],
  selector: 'app-main-dashboard-entry',
  template: `<lib-ui-components></lib-ui-components>`,
})
export class RemoteEntryComponent {}
