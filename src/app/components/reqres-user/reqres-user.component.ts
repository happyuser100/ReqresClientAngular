import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GeneralUser } from 'src/app/models/general-user';
import { ReqresUserService } from 'src/app/services/reqres-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reqres-user',
  templateUrl: './reqres-user.component.html',
  styleUrls: ['./reqres-user.component.css']
})
export class ReqresUserComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  listDataUser: any;
  displayedColumnsUser: string[] = ['first_name', 'last_name', 'email','avatar'];

  @ViewChild(MatSort, { static: false }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  page?: number;
  perPage?: number;

  constructor(
    private fb: FormBuilder,
    private reqresUserService: ReqresUserService) {
      this.form = fb.group({
        page: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        perPage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      });

    }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.page = 1;
    this.perPage = 12;
    this.form.get("page")?.setValue(this.page.toString());
    this.form.get("perPage")?.setValue(this.perPage.toString());
    this.getUsers();
  }

  getUsers() {
    this.reqresUserService.getUsers(this.page, this.perPage).subscribe((generalUser: GeneralUser) => {
      debugger
      this.listDataUser = new MatTableDataSource(generalUser.data);
      this.listDataUser.sort = this.sort;
      this.listDataUser.paginator = this.paginator;

    },
      (error) => {
        debugger
        if (error != null) {
        }
      }
    )
  }

  changeData()
  {
     this.page = this.form.get("page")?.value;
     this.perPage = this.form.get("perPage")?.value;
     this.getUsers();
  }
}


