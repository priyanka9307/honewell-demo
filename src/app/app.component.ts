import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // No. of beggars initial 5
  A = 5;
  // A beggars pot list
  A_pot: number[] = [];

  // devotee list
  B: number[][] = [];
  // from range
  L: number;
  // to range
  R: number;
  // donate amount
  P: number;

  /**
   * Function to add devotee list to B
   */
  addDevotee() {
    // check constaints

    // 1 <= L <= R <= A
    if (1 <= this.L && this.L <= this.R && this.R <= this.A) {
      // 1 <= P <= 1000
      if (1 <= this.P && this.P <= 100) {
        // add valid input
        this.B.push([this.L, this.R, this.P]);
        // rest values
        this.L = 0;
        this.R = 0;
        this.P = 0;
      } else {
        // alert message
        alert('Invalid input, 1 <= P <= 1000');
      }
    } else {
      // alert message
      alert('Invalid input, 1 <= L <= R <= A');
    }
  }

  /**
   * Funtion to reset devotee list
   */
  restDevoteeList() {
    this.B = [];
  }

  /**
   * Function to calculate beggars at end of the day
   */
  calcuateSum() {
    // Step 1: Create empty pot for each beggars of A
    this.A_pot = new Array<number>(this.A);
    // set initial amount to 0
    this.A_pot = this.A_pot.fill(0);
    console.log('Initial amount with all beggars : [' + this.A_pot + ']');
    // For loop to calculate sum
    var i: number;
    var x;
    // for loop, iterate B devotee array
    for (i = 0; i < this.B.length; i++) {
      // assing devotee to temp variable x
      x = this.B[i];
      console.log('[L, R, P] = [' + x + ']');
      var j: number;
      // inner for loop, to add beggar j th beggar from L to R range with amount P
      for (j = x[0]; j <= x[1]; j++) {
        this.A_pot[j - 1] = this.A_pot[j - 1] + x[2];
      }
    }
    // print output
    console.log('Total amount with all beggars : [' + this.A_pot + ']');
  }
}
