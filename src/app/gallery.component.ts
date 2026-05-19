import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { galleryAlbums } from './gallery-data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  private route = inject(ActivatedRoute);
  private folder = this.route.snapshot.paramMap.get('folder');

  album = galleryAlbums.find((item) => item.folder === this.folder);

  get heroBackground(): string | null {
    const firstImage = this.album?.images[0];

    if (!firstImage) {
      return null;
    }

    return `linear-gradient(90deg, rgba(16, 24, 32, 0.95), rgba(16, 24, 32, 0.74)), url("${firstImage.src}")`;
  }
}
