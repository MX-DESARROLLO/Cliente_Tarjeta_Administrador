import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service'; 
import { PdfMakeWrapper, Img, Txt } from 'pdfmake-wrapper';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  elementType
  dato
  rata
  buff
  base64data
  clima;
  

  constructor(private climaService: ClimaService) {

  }
  
  ///ngOnInit a iniciar el servicio
  ngOnInit(){
    
  }

  getClima(pais: string){
    
    this.climaService.getClima(pais)
      .subscribe(
        res => {
          console.log(res);
          this.clima = res
          this.elementType = 'url';
          
          
          //this.dato = 'http://localhost:3000/api/tarjetas/consulta/' + base64data;
        
          this.dato = 'https://tarjeta.munimixco.gob.gt/consulta/' + btoa(pais);
        },
        err => console.log(err)
      )
  }

  submitLocation(pais: HTMLInputElement){
    if (pais.value) {
      this.getClima(pais.value);
      console.log(pais.value);
      pais.value = '';
    } else {
      alert('Ingrese Pais..!!');
    }
    
    pais.focus();
    return false;
  }

 
 
/// impresion

  print(): void { 
    let printContents, popupWin; 
    printContents = document.getElementById('print-section').innerHTML; 
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto'); 
    popupWin.document.open(); 
    popupWin.document.write(` 
     <html> 
     <head> 
      <title>Print tab</title> 
      <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css">
      <style> 
      
        th {
          border: 1px solid black;
        }

        .aclass > img {
          width: 200px;
        }
      </style> 
     </head> 
    <body onload="window.print();window.close()">${printContents}</body> 
     </html>` 
    ); 
    popupWin.document.close();  
  } 

  //obtiene fecha actual
  CurrentDate = new Date();
}
