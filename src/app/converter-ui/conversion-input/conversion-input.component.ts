import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from 'src/app/shared/conversion-def.class';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  templateUrl: './conversion-input.component.html',
  styleUrls: ['./conversion-input.component.css']
})
export class ConversionInputComponent implements OnInit{
 @Input() parentForm!: FormGroup
 conversionInUnitText: string = "input"
 constructor(private conversionService: ConversionEngineService) {}
 ngOnInit() {
     this.parentForm.get("converterValue")?.valueChanges.subscribe((value) => {
      this.conversionService.setConversionIdx(value)
      let conversionDef = this.conversionService.getCurrentConversion()
      this.conversionInUnitText = "Input as "+conversionDef.inUnit
     })

     this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionInUnitText = "Input"
     })

     this.parentForm.get('conversionInput')?.valueChanges.subscribe((value) => {
      let output_value = value
      let conversionDef = this.conversionService.getCurrentConversion()
      output_value = Math.round(output_value*conversionDef.coef*100) / 100 // conversion rounded to 2 decimals
     this.parentForm.get('conversionOutput')?.setValue(output_value)
      
     })
 }
}
