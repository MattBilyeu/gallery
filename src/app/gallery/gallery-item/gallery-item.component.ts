import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContentfulService } from 'src/app/shared/contentful.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  activatedEntry: any;
  entryID: string = '';
  remainingImages: string[] = [];

  constructor(private contentfulService: ContentfulService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
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
              this.remainingImages.push(image.fields.file.url);
            })
          }
        })
      })
  }

  onReturn() {
    this.router.navigate(['']);
  }

}
