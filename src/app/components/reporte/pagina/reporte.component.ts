import { Component } from '@angular/core';
import { ObjetoServicioARealizar } from 'src/app/interfaces/servicioARealizar';
import { PageServicioService } from 'src/app/services/page-servicio.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'page-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  serviciosARealizar: ObjetoServicioARealizar[];
  servicioARealizarBusquedas: ObjetoServicioARealizar[] = [];

  mostrarBusqTipoServicio = false;
  mostrarBusqManager = false;
  
  constructor(private pageServicioService:PageServicioService){this.downloadPDF();  }

  ngOnInit() {
    this.pageServicioService.getServicios().subscribe(
      (serviciosARealizar) => {this.serviciosARealizar = serviciosARealizar;});

    
  }
  busquedaPorManager(termino: string): void {
    if (termino !== '') {
      this.pageServicioService.busquedaServicioManager(termino).subscribe(
        (serviciosARealizar) => this.servicioARealizarBusquedas = serviciosARealizar
      );
    } else {
      this.servicioARealizarBusquedas = [];
    }
  }

  busquedaPorServicio(termino: string): void {
    if (termino !== '') {
      this.pageServicioService.busquedaServicio(termino).subscribe(
        (serviciosARealizar) => this.servicioARealizarBusquedas = serviciosARealizar
      );
    } else {
      this.servicioARealizarBusquedas = [];
    }
  }

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_HotelClean.pdf`);
    });
  }


}