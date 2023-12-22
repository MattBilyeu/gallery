import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit {
  popUpActive: boolean = false;
  popUpIndex: number = 0;
  activatedEntry: any;
  entryID: string = '';
  allImages: string[] = [];
  isMobile!: boolean;

  constructor(private contentfulService: ContentfulService,
              private router: Router,
              private route: ActivatedRoute,
              private elementRef: ElementRef) {}

  ngOnInit() {
    this.checkIfMobile();
    const params = this.route.params.subscribe(
      (params: Params) => {
        this.entryID = params['id']
      }
    );
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
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;;
    this.isMobile = width < 768;
  }

  disablePopUp() {
    this.popUpActive = false;
    this.popUpIndex = 0;
  }

  activatePopUp(index: number) {
    this.popUpActive = true;
    this.popUpIndex = index;
  }

  advancePhoto() {
    if (this.popUpIndex === this.allImages.length - 1) {
      this.popUpIndex = 0;
    } else {
      this.popUpIndex = this.popUpIndex + 1;
    }
  }

  reversePhoto() {
    if (this.popUpIndex === 0) {
      this.popUpIndex = this.allImages.length - 1;
    } else {
      this.popUpIndex = this.popUpIndex - 1;
    }
  }

  onReturn() {
    this.router.navigate(['']);
  }

  getRelativeUrl(id: string) {
    return `https://sovereign-renovations.com/gallery/#images/${id}`
  }
}
