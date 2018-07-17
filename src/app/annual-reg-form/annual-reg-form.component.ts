import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annual-reg-form',
  templateUrl: './annual-reg-form.component.html',
  styleUrls: ['./annual-reg-form.component.css']
})
export class AnnualRegFormComponent implements OnInit {

  constructor() { 
    var btn = document.getElementById("calcRegBtn");
    if(btn)
      btn.addEventListener("onclick", this.calcCosts);
  }

  ngOnInit() {
  }

  calcNumChildren() {
    console.log("calcNumChildren() called");
   // var strChild1 = document.getElementById('childname');
    var totChildren = 5;
    var strChild1 = document.forms['reg']['childname1'].value;
    var strChild2 = document.forms['reg']['childname2'].value;
    var strChild3 = document.forms['reg']['childname3'].value;
    var strChild4 = document.forms['reg']['childname4'].value;
    var strChild5 = document.forms['reg']['childname5'].value;
  
    if (strChild5 == null || strChild5 == "")
    {
      totChildren--;
    }
    if (strChild4 == null || strChild4 == "")
    {
      totChildren--;
    }
    if (strChild3 == null || strChild3 == "")
    {
      totChildren--;
    }
    if (strChild2 == null || strChild2 == "")
    {
      totChildren--;
    }
    if (strChild1 == null || strChild1 == "")
    {
      totChildren--;
    }
    console.log("totChildren = " + totChildren);
    document.getElementById("numChildren").innerHTML = totChildren.toString();
    return totChildren;
  }
  
  calcCosts() {
    console.log("calcCosts() called");
    var children = this.calcNumChildren();
    var regFees = 0;
    while (children > 0) {
      regFees += 95;
      children--;
    }
    document.getElementById("regtotal").innerHTML = regFees.toString();
    return null;
  }
    
}
