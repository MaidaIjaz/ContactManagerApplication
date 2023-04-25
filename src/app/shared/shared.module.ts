import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchFormComponent } from '../search/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [CommonModule, FormsModule, CustomMaterialModule, ReactiveFormsModule ],
  exports: [SearchFormComponent],
})
export class SharedModule {}
