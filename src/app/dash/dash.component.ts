import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // You can access the selected file here
      console.log('Selected file:', selectedFile.name);
    }
  }
}
