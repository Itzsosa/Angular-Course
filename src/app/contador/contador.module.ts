import {NgModule} from '@angular/core';
import {ContadorComponent} from "./contador/contador.component";

@NgModule({
  declarations: [// Aqui van los componentes
    ContadorComponent
  ],
  exports:[
    //ListadoComponent
    ContadorComponent
  ],
})
export class ContadorModule{

}
