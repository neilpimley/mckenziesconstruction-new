import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryAlbum {
  title: string;
  folder: string;
  summary: string;
  images: GalleryImage[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  albums: GalleryAlbum[] = [
    {
      title: '184 Sicily Park, Belfast',
      folder: '184sicily',
      summary: 'This excellent attractive semi detached property occupies a superb extensive level site within a much sought after residential area and is extremely convenient to the many amenities in the surrounding locality. The house exuded character and was tastefully extended using reclaimed bricks and preserving all original joinery. Window framing and picture rails removed by previous owners were reinstated to their original spec.',
      images: []
    },
    {
      title: '206 Sicily Park, Belfast',
      folder: '206sicily',
      summary: 'Attractive semi detached property off Upper Lisburn Road. Refurbishment including rebuilding co-joined chimney.',
      images: []
    },
    {
      title: 'Greystown Avenue, Belfast',
      folder: 'greystown',
      summary: 'Refurbished and extended semi-detached property in quiet street off Malone Road.The property was in a very poor state of repair when purchased. We extended the kitchen and altered the internal walls to incorporate a utility room and downstairs toilet. A new bathroom was installed and house was re-plastered from top to bottom. New doors and architrave was fitted throughout. A contemporary kitchen with marble worktops and splash backs was installed.',
      images: []
    },
    {
      title: 'Locksley Park, Belfast',
      folder: 'locksley',
      summary: 'This excellent attractive semi detached property occupies a superb extensive level site within a much sought after residential area and is extremely convenient to the many amenities in the surrounding locality. The house exuded character and was tastefully extended using reclaimed bricks and preserving all original joinery. Window framing and picture rails removed by previous owners were reinstated to their original spec.',
      images: []
    },
    {
      title: 'Mayfield Street, Belfast',
      folder: 'mayfield',
      summary: 'Refurbished and extended mid terrace property just off the bustling Lisburn Road with an open plan living, dining and modern white gloss kitchen and contemporary shower room, as well as two bedrooms. This property was of great interest to first time buyers and investors due to its fantastic location and immaculate presentation.',
      images: []
    },
    {
      title: 'Old Coach Road',
      folder: 'oldcoach',
      summary: 'We took on a major refurbishment of this detached 4 bedroom bungalow that had not been touched since 1966. We donated the original kitchen to a retro enthusiast and thoroughly modernised the property.',
      images: [
        { src: '/gallery/oldcoach/3736060.jpg', alt: 'Old Coach project photo 1' },
        { src: '/gallery/oldcoach/3736061.jpg', alt: 'Old Coach project photo 2' },
        { src: '/gallery/oldcoach/3736062.jpg', alt: 'Old Coach project photo 3' },
        { src: '/gallery/oldcoach/3736063.jpg', alt: 'Old Coach project photo 4' },
        { src: '/gallery/oldcoach/3736064.jpg', alt: 'Old Coach project photo 5' },
        { src: '/gallery/oldcoach/3736069.jpg', alt: 'Old Coach project photo 6' }
      ]
    },
    {
      title: 'Parkville, 59 Seymour Street, Lisburn',
      folder: 'parkville',
      summary: 'Project gallery ready for photos.',
      images: []
    }
  ];
}
