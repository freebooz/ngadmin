import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../pages/partials/partials.module';
import { StorageViewComponent } from './storageview.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// // Core
// import { FakeApiService } from './_core/_server/fake-api.service';
// // Core => Services
// import { CustomersService } from './_core/services/index';
// import { OrdersService } from './_core/services/orders.service';
// import { ProductRemarksService } from './_core/services/index';
// import { ProductSpecificationsService } from './_core/services/index';
// import { ProductsService } from './_core/services/index';
// import { SpecificationsService } from './_core/services/specification.service';
// // Core => Utils
// import { HttpUtilsService } from './_core/utils/http-utils.service';
// import { TypesUtilsService } from './_core/utils/types-utils.service';
// import { LayoutUtilsService } from './_core/utils/layout-utils.service';
// import { InterceptService } from './_core/utils/intercept.service';
// Shared
// import { ActionNotificationComponent } from './_shared/action-natification/action-notification.component';
// import { DeleteEntityDialogComponent } from './_shared/delete-entity-dialog/delete-entity-dialog.component';
// import { FetchEntityDialogComponent } from './_shared/fetch-entity-dialog/fetch-entity-dialog.component';
// import { UpdateStatusDialogComponent } from './_shared/update-status-dialog/update-status-dialog.component';
// import { AlertComponent } from './_shared/alert/alert.component';

// Products
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';
// import { environment } from '../../../../../../environments/environment';

const routes: Routes = [
	{
		path: '',
		component: StorageViewComponent,
		children: [
			{
				path: '',
				redirectTo: 'customers',
				pathMatch: 'full'
			},
			{
				path: 'products',
				component: ProductListComponent,
			},
			{
				path: 'products/add',
				component: ProductEditComponent
			},
			{
				path: 'products/edit',
				component: ProductEditComponent
			},
			{
				path: 'products/edit/:id',
				component: ProductEditComponent
			},
		]
	}
];

@NgModule({
	imports: [
		MatDialogModule,
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
        MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		// environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forFeature(FakeApiService) : []
	],
	providers: [
		// InterceptService,
      	// {
        // 	provide: HTTP_INTERCEPTORS,
       	//  	useClass: InterceptService,
        // 	multi: true
      	// },
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'm-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		// HttpUtilsService,
		// CustomersService,
		// OrdersService,
		// ProductRemarksService,
		// ProductSpecificationsService,
		// ProductsService,
		// SpecificationsService,
		// TypesUtilsService,
		// LayoutUtilsService
	],
	entryComponents: [
		// ActionNotificationComponent,
		// CustomerEditDialogComponent,
		// DeleteEntityDialogComponent,
		// FetchEntityDialogComponent,
		// UpdateStatusDialogComponent,
		// SpecificationEditDialogComponent
	],
	declarations: [
		StorageViewComponent,
		// Shared
		// ActionNotificationComponent,
		// DeleteEntityDialogComponent,
		// FetchEntityDialogComponent,
		// UpdateStatusDialogComponent,
		// AlertComponent,
		// Products
		ProductListComponent,
		ProductEditComponent
	]
})
export class StorageViewModule { }
