import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {
  weightDefs: ConversionDef[] = [
    new ConversionDef("kgs to lbs", "kg", "lbs", 2.204623),
    new ConversionDef("lbs to kgs", "lbs", "kg", 1/2.204623),
  ]
  distanceDefs: ConversionDef[] = [
    new ConversionDef("m to mile", "m", "miles", 1609.344),
    new ConversionDef("mile to m", "mile", "m", 1/1609.344),
    new ConversionDef("m to feet", "m", "ft", 3.280),
    new ConversionDef("feet to m", "ft", "m", 0.3048),
    new ConversionDef("cm to inch", "cm", "in", 0.3937),
    new ConversionDef("inch to cm", "in", "c", 2.54),
  ]
  currencyDefs: ConversionDef[] = [
    new ConversionDef("dollar to euro", "$", "€", 0.94),
    new ConversionDef("euro to dollar", "€", "$", 1.06),
    new ConversionDef("pound to euro", "£", "€", 1.16),
    new ConversionDef("euro to pound","€", "£", 0.86),
  ]
  
  converterCategories: ConverterCategoryDef[] = [
    new ConverterCategoryDef("Weight", "", this.weightDefs),
    new ConverterCategoryDef("Distance", "", this.distanceDefs),
    new ConverterCategoryDef("Currency", "", this.currencyDefs),
]
  private categoryIdx = 0
  private conversionIdx = 0

  constructor() { }
  getConverterCategories(): ConverterCategoryDef[] {
    return this.converterCategories
  }
  getCurrentConversions(): ConversionDef[] {
    return this.converterCategories[this.categoryIdx].conversion
  }
  getCurrentConversion(): ConversionDef {
    return this.converterCategories[this.categoryIdx].conversion[this.conversionIdx]
  }
  setCategoryIdx(name: string) {
    for(let i = 0; i < this.converterCategories.length; i++) {
      if(name == this.converterCategories[i].name) {
        this.categoryIdx = i
        return
      }
    }
    return
  }
  setConversionIdx(name: string) {
    let conversionDefs = this.converterCategories[this.categoryIdx].conversion
    for(let i = 0; i < conversionDefs.length; i++) {
      if(name == conversionDefs[i].name) {
        this.conversionIdx = i
        return
      }
    }
    return
  }
}
