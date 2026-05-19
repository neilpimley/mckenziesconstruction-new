import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { galleryAlbums, GalleryAlbum, GalleryImage } from './gallery-data';

interface ServiceDetail {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  services: ServiceDetail[] = [
    {
      title: 'Extensions',
      icon: 'bi-house-up',
      description: 'An extension can radically improve a property. Extra space or an extra room can add value and make a house more attractive to buyers.'
    },
    {
      title: 'Conservatories',
      icon: 'bi-brightness-high',
      description: 'A cost-effective way of adding a new room or increasing the living space of your home. We work closely with our partners, Tom Arkins Windows & Conservatories.'
    },
    {
      title: 'Bathrooms',
      icon: 'bi-droplet',
      description: 'It is often quoted that the two most important rooms in your home that add value are the bathroom and kitchen. Browse our galleries to see the modern and contemporary bathroom suites and tile combinations we have fitted in our developments. We have accounts with Glenhill Merchants and Armatile to get you the best deals on tiles and sanitary ware. If your heating system is more than 15 years old, it is worth investigating a boiler replacement grant and converting to gas when getting a new bathroom. Removing the hot water tank and installing a power shower instead of an electric one can transform a bathroom.'
    },
    {
      title: 'Garages',
      icon: 'bi-buildings',
      description: 'Whether a small garage for storage or a larger construction to park your prized classic car in, we can quote you for all options.'
    },
    {
      title: 'Chimney rebuilds',
      icon: 'bi-bricks',
      description: 'Replacing a decaying chimney can be a complex job but will save you money in the long run and is a safety necessity. If you plan to sell your property, a survey is bound to reveal any damage and will likely stall your sale.'
    },
    {
      title: 'Fireplaces and woodburning stove installs',
      icon: 'bi-fire',
      description: 'If it is time to replace your mahogany and marble fireplace with a contemporary woodburning stove with a slate hearth, sleeper mantlepiece and exposed brick recess, give us a call for a quote.'
    },
    {
      title: 'Patios',
      icon: 'bi-grid-3x3-gap',
      description: 'We install practical, well-finished patio areas that improve outdoor space and complement the property.'
    }
  ];

  submitState: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  enquiryForm = this.fb.group({
    botField: [''],
    name: ['', Validators.required],
    phone: [''],
    projectType: ['Home extension', Validators.required],
    message: ['', Validators.required]
  });

  get albums(): GalleryAlbum[] {
    return galleryAlbums;
  }

  previewImages(album: GalleryAlbum): GalleryImage[] {
    return album.images.slice(0, 6);
  }

  onSubmit(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    this.submitState = 'sending';
    const v = this.enquiryForm.value;

    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': v.botField ?? '',
      name: v.name ?? '',
      phone: v.phone ?? '',
      projectType: v.projectType ?? '',
      message: v.message ?? ''
    }).toString();

    this.http
      .post('/', body, {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
        responseType: 'text'
      })
      .subscribe({
        next: () => {
          this.submitState = 'success';
          this.enquiryForm.reset({ projectType: 'Home extension' });
        },
        error: () => {
          this.submitState = 'error';
        }
      });
  }
}
