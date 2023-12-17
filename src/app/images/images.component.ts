import { Component, OnInit, HostListener } from '@angular/core';
import { ContentfulService } from '../shared/contentful.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  activatedEntry: any;
  allImages: String[] = []
  entryID!: string;
  selectedIndex: number = 0;

  constructor(private contentfulService: ContentfulService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.entryID = params['id']
    });
    this.contentfulService.getEntries()
      .then(entries => {
        entries.forEach((entry)=> {
          if(entry.sys.id === this.entryID) {
            this.activatedEntry = entry;
            this.activatedEntry.fields.remainingImages.forEach((image: any)=> {
              this.allImages.push(image.fields.file.url);
            })
          }
        });
      })
  };

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.leftImage();
    } else
    if (event.key === 'ArrowRight') {
      this.rightImage();
    }
  }

  leftImage() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.allImages.length - 1;
    } else {
      this.selectedIndex--
    }
  };

  rightImage() {
    if (this.selectedIndex === this.allImages.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }
}
