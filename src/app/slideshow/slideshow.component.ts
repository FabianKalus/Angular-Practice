import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['P1076251.jpg', 'P1087226.jpg', 'P1175179.jpg'];
  headlines = ['Good pictures come only from a good camera', 'Born to code', 'Was weiß ich, frag den']
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    this.showImage = false;

    setTimeout(() => {
    this.showImage = true;
    }, 10);
  }, 8000);

  }
}
