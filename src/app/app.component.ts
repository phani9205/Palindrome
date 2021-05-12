import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';

  result: boolean;
  inputString: string;

  constructor() {
  }

  /**
   * Check for palindrome
   * @param value : string
   */
  public checkForPalindrome(value: string): void {
    if (!!!value) {
      this.result = true;
      return;
    }

    const charArray: string[] = value.split('');
    let startIndex = 0;
    let endIndex: number = charArray.length - 1;

    while (startIndex < endIndex) {
      if (charArray[startIndex] !== charArray[endIndex]) {
        this.result = false;
        return;
      }

      startIndex++;
      endIndex--;
    }

    this.result = true;
    return;
  }
}
