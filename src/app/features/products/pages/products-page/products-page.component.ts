import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    providers: [HttpService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent {}
