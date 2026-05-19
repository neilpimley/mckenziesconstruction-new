import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { galleryAlbums, GalleryAlbum, GalleryImage } from './gallery-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

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
