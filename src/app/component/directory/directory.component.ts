import { Component, OnInit } from '@angular/core';
import { Directory } from '../../modelo/directory';
import { DirectoryService } from '../../servicios/directory.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  directoryList: Directory[];
  DirectoryService: any;
  
    constructor(public directoryService: DirectoryService) { }
  
    ngOnInit() {
    }
  
    onSubmit(directoryForm: NgForm) {
  
      this.directoryService.getDirectory();
  
      if (directoryForm.value.$keyRegistro == null) {
        this.directoryService.insertDirectory(directoryForm.value);
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Creado con exito!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.directoryService.updateDirectory(directoryForm.value);
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Modificado con exito!',
          showConfirmButton: false,
          timer: 1500
        })
  
      }
  
    }
  
  }
