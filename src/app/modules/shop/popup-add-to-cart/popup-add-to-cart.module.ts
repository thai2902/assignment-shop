import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';


import { PopupAddToCartComponent } from './popup-add-to-cart.component';

const MAT_MODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MAT_MODULES,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    PopupAddToCartComponent
  ],
  exports: [
    PopupAddToCartComponent
  ]
})
export class PopupAddToCartModule { }
