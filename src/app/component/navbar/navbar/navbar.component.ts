import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../../modelo/navbar';
import { NavbarService } from '../../../servicios/navbar.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarList: Navbar[];

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
  }

  onSubmit(navbarForm: NgForm) {

    this.navbarService.getNavbar();

    if (navbarForm.value.$keyRegistro == null) {
      // this.navbarService.insertNavbar(navbarForm.value);
      // Swal.fire({
      //   position: 'center',
      //   type: 'success',
      //   title: 'Creado con exito!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
    } else {
      this.navbarService.updateNavbar(navbarForm.value);
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
