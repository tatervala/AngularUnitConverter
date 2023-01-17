import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrls: ['./conversion-output.component.css']
})
export class ConversionOutputComponent {
  @Input() parentForm!: FormGroup
 conversionOutUnitText: string = "Output"
 constructor(private conversionService: ConversionEngineService) {}
 ngOnInit(): void {

 }
}
