import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatTableDataSource} from '@angular/material';
import {Issue} from '../../issue.model';
import {IssueService } from  '../../issue.service';
//import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
issues : Issue[];
displayedColumns :string[]= ['title', 'responsible', 'severity', 'status', 'actions'];
  constructor(private issueService : IssueService, private router : Router) { }

  ngOnInit() {

    /* this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    }) */

    this.fetchIssues();
  }
fetchIssues(){
  this.issueService.getIssues().subscribe((data : Issue[]) => {
    this.issues = data;
    console.log('Data requested...');
    console.log(this.issues);
  });
}

editIssue(id){
  this.router.navigate([`/edit/${id}`]);
  
}

deleteIssue(id){
  this.issueService. deleteIssssue(id).subscribe(() => {
    this.fetchIssues();
  });
  console.log('dfdf');
}


}
