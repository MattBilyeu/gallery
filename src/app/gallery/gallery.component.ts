import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../shared/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  entries: any[] = [];

  constructor(private contentful: ContentfulService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.contentful.getEntries().then(
      entries => {
        this.entries = entries;
      }
    )
  }

  onSelect(id: string) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}
