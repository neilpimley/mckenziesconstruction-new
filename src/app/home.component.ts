import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
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
  albums: GalleryAlbum[] = [
    {
      title: '184 Sicily Park, Belfast',
      folder: '184sicily',
      summary: 'This excellent attractive semi detached property occupies a superb extensive level site within a much sought after residential area and is extremely convenient to the many amenities in the surrounding locality. The house exuded character and was tastefully extended using reclaimed bricks and preserving all original joinery. Window framing and picture rails removed by previous owners were reinstated to their original spec.',
      images: this.albumImages('184sicily', [
        '1000-800-trltrl61065-1.jpg',
        '1000-800-trltrl61065-3.jpg',
        '1000-800-trltrl61065-4.jpg',
        '1000-800-trltrl61065-5.jpg',
        '1000-800-trltrl61065-6.jpg',
        '1000-800-trltrl61065-8.jpg',
        '1000-800-trltrl61065-9.jpg',
        'trltrl61065-1.jpg',
        'trltrl61065-10.jpg',
        'trltrl61065-11.jpg',
        'trltrl61065-12.jpg',
        'trltrl61065-13.jpg',
        'trltrl61065-14.jpg',
        'trltrl61065-15.jpg',
        'trltrl61065-16.jpg',
        'trltrl61065-4.jpg',
        'trltrl61065-5.jpg',
        'trltrl61065-6.jpg',
        'trltrl61065-7.jpg',
        'trltrl61065-8.jpg',
        'trltrl61065-9.jpg'
      ])
    },
    {
      title: '206 Sicily Park, Belfast',
      folder: '206sicily',
      summary: 'Attractive semi detached property off Upper Lisburn Road. Refurbishment including rebuilding co-joined chimney.',
      images: this.albumImages('206sicily', [
        '1000-800-trltrl48003-1.jpg',
        '1000-800-trltrl48003-10.jpg',
        '1000-800-trltrl48003-12.jpg',
        '1000-800-trltrl48003-13.jpg',
        '1000-800-trltrl48003-2.jpg',
        '1000-800-trltrl48003-3.jpg',
        '1000-800-trltrl48003-4.jpg',
        '1000-800-trltrl48003-5.jpg',
        '1000-800-trltrl48003-6.jpg',
        '1000-800-trltrl48003-7.jpg',
        '1000-800-trltrl48003-8.jpg',
        '1000-800-trltrl48003-9.jpg',
        'brg1-358.jpg',
        'brg2-319.jpg',
        'brg3-283.jpg',
        'brg4-280.jpg'
      ])
    },
    {
      title: 'Greystown Avenue, Belfast',
      folder: 'greystown',
      summary: 'Refurbished and extended semi-detached property in quiet street off Malone Road.The property was in a very poor state of repair when purchased. We extended the kitchen and altered the internal walls to incorporate a utility room and downstairs toilet. A new bathroom was installed and house was re-plastered from top to bottom. New doors and architrave was fitted throughout. A contemporary kitchen with marble worktops and splash backs was installed.',
      images: this.albumImages('greystown', [
        '106-greystown-road-1.jpg',
        '106-greystown-road-10.jpg',
        '106-greystown-road-11.jpg',
        '106-greystown-road-12.jpg',
        '106-greystown-road-13.jpg',
        '106-greystown-road-14.jpg',
        '106-greystown-road-15.jpg',
        '106-greystown-road-16.jpg',
        '106-greystown-road-19.jpg',
        '106-greystown-road-20.jpg',
        '106-greystown-road-21.jpg',
        '106-greystown-road-22.jpg',
        '106-greystown-road-23.jpg',
        '106-greystown-road-3.jpg',
        '106-greystown-road-4.jpg',
        '106-greystown-road-5.jpg',
        '106-greystown-road-6.jpg',
        '106-greystown-road-7.jpg',
        '106-greystown-road-8.jpg',
        '106-greystown-road-9.jpg',
        '20140807_201629.jpg',
        '20140807_201808.jpg',
        '20140807_201937.jpg',
        '20140807_201944.jpg',
        '20140807_201951.jpg',
        '20140807_202214.jpg',
        '20140807_202231.jpg',
        '20140807_202236.jpg',
        '20140807_202243.jpg',
        '20140807_202327.jpg',
        '20140807_202431.jpg',
        '20140914_125254.jpg',
        '20140914_143326.jpg',
        '20141018_111156.jpg',
        '20141018_111208.jpg',
        '20141108_144759.jpg',
        '20141108_144810.jpg',
        '20141108_144821.jpg',
        '20141108_144826.jpg',
        '20141108_144836.jpg',
        '20141108_144853.jpg',
        '20141108_144908.jpg',
        '20141108_144929.jpg',
        '20141108_144959.jpg',
        '20141108_154004.jpg',
        '20141108_155536.jpg',
        '20141108_155552.jpg',
        '20141117_230443.jpg',
        '20141117_230457-1.jpg',
        '20141117_230457.jpg',
        '20141117_230813.jpg',
        '20141126_204500.jpg',
        '20141126_204821.jpg',
        '20141213_110523.jpg',
        '20141213_110540.jpg',
        '20141213_110649.jpg',
        '20141213_110656.jpg',
        '20141213_135929.jpg',
        '20141213_160749.jpg'
      ])
    },
    {
      title: 'Locksley Park, Belfast',
      folder: 'locksley',
      summary: 'This excellent attractive semi detached property occupies a superb extensive level site within a much sought after residential area and is extremely convenient to the many amenities in the surrounding locality. The house exuded character and was tastefully extended using reclaimed bricks and preserving all original joinery. Window framing and picture rails removed by previous owners were reinstated to their original spec.',
      images: this.albumImages('locksley', [
        '1.jpg',
        '10.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '2.jpg',
        '20.jpg',
        '20131109_102116.jpg',
        '20131109_102239.jpg',
        '20131109_102246.jpg',
        '20131109_103655.jpg',
        '20131214_104805.jpg',
        '20131230_144808.jpg',
        '20131230_144818.jpg',
        '20131230_144829.jpg',
        '20131230_144845.jpg',
        '20131230_145007.jpg',
        '20140111_164103.jpg',
        '20140208_102653.jpg',
        '20140208_102705.jpg',
        '20140208_102916.jpg',
        '20140208_114047.jpg',
        '20140208_140131.jpg',
        '20140215_133854.jpg',
        '20140215_133904-1.jpg',
        '20140215_133911.jpg',
        '20140222_135736.jpg',
        '20140222_135822.jpg',
        '20140222_145346.jpg',
        '20140222_145405.jpg',
        '20140301_104213.jpg',
        '20140301_104301.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg'
      ])
    },
    {
      title: 'Mayfield Street, Belfast',
      folder: 'mayfield',
      summary: 'Refurbished and extended mid terrace property just off the bustling Lisburn Road with an open plan living, dining and modern white gloss kitchen and contemporary shower room, as well as two bedrooms. This property was of great interest to first time buyers and investors due to its fantastic location and immaculate presentation.',
      images: this.albumImages('mayfield', [
        '1000-800-trltrl70630-1.jpg',
        '1000-800-trltrl70630-10.jpg',
        '1000-800-trltrl70630-11.jpg',
        '1000-800-trltrl70630-12.jpg',
        '1000-800-trltrl70630-2.jpg',
        '1000-800-trltrl70630-3.jpg',
        '1000-800-trltrl70630-4.jpg',
        '1000-800-trltrl70630-6.jpg',
        '1000-800-trltrl70630-7.jpg',
        '1000-800-trltrl70630-9.jpg',
        '20140718_170810.jpg',
        '20140718_170826.jpg',
        '20140718_170910.jpg',
        '20140718_170921.jpg',
        '20140718_170930.jpg',
        '20140718_170940.jpg',
        '20140809_150238.jpg',
        '20140809_150259.jpg',
        '20140809_150314.jpg',
        '20140809_150539.jpg',
        '20140812_211506.jpg',
        '20140812_211633.jpg',
        '20140814_194631.jpg',
        '20140814_194918.jpg',
        '20140814_195259.jpg',
        '85635409.jpg',
        '85635410.jpg',
        '85635411.jpg',
        '85635412.jpg',
        '85635413.jpg',
        '85635414.jpg',
        '85635415.jpg',
        '85635416.jpg',
        '85635417.jpg',
        '85635418.jpg',
        '85635419.jpg'
      ])
    },
    {
      title: 'Old Coach Road',
      folder: 'oldcoach',
      summary: 'We took on a major refurbishment of this detached 4 bedroom bungalow that had not been touched since 1966. We donated the original kitchen to a retro enthusiast and thoroughly modernised the property.',
      images: this.albumImages('oldcoach', [
        '1.jpg',
        '10.jpg',
        '1010304_1133372870046834_4257104039928357420_n.jpg',
        '10255729_1133372813380173_3673438156330835578_n.jpg',
        '10274173_1133372293380225_2235285197581751087_n.jpg',
        '11.jpg',
        '11222809_1133372710046850_562934267619046113_n.jpg',
        '12.jpg',
        '12376787_1133372603380194_8964469416674348734_n.jpg',
        '13.jpg',
        '14.jpg',
        '1507772_1133372343380220_8790777937865847022_n.jpg',
        '1555590_1133372843380170_2978402012816346649_n.jpg',
        '1557548_1133372920046829_6450770764233714237_n.jpg',
        '1609698_1133372786713509_5586055893499382111_n.jpg',
        '1934833_1133372743380180_1480745975462719260_n.jpg',
        '2.jpg',
        '21478_1133372680046853_7453705086945654276_n.jpg',
        '3.jpg',
        '3736060.jpg',
        '3736061.jpg',
        '3736062.jpg',
        '3736063.jpg',
        '3736064.jpg',
        '3736065.jpg',
        '3736066.jpg',
        '3736067.jpg',
        '3736068.jpg',
        '3736069.jpg',
        '3736070.jpg',
        '3736071.jpg',
        '3736072.jpg',
        '4.jpg',
        '47590_1133372653380189_1980465643083471348_n.jpg',
        '5.jpg',
        '6.jpg',
        '9.jpg',
        '996739_1133372376713550_3470294218624820918_n.jpg',
        'img-20160729-wa0005.jpg',
        'img-20160729-wa0007.jpg',
        'img-20160729-wa0008.jpg',
        'img-20160729-wa0009.jpg',
        'img-20160729-wa0010.jpg',
        'img-20160729-wa0012.jpg',
        'img-20160729-wa0014.jpg',
        'img-20160729-wa0015.jpg',
        'img-20160729-wa0017.jpg'
      ])
    },
    {
      title: 'Parkville, 59 Seymour Street, Lisburn',
      folder: 'parkville',
      summary: 'Project gallery ready for photos.',
      images: this.albumImages('parkville', [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '6.jpg',
        'FDPFDP9605-32.jpg',
        'FDPFDP9605-33.jpg',
        'PXL_20250527_210913354.jpg',
        'PXL_20260219_130706039.jpg',
        'PXL_20260224_125355245.jpg',
        'PXL_20260307_083213943.jpg',
        'PXL_20260408_122624911.jpg',
        'PXL_20260408_125632685.MP.jpg',
        'PXL_20260428_185948793.jpg',
        'PXL_20260428_190815702.jpg',
        'PXL_20260428_190857414.jpg',
        'WhatsApp Image 2026-01-08 at 2.10.52 PM.jpeg',
        'WhatsApp Image 2026-01-09 at 3.02.45 PM.jpeg'
      ])
    }
  ];

  private albumImages(folder: string, fileNames: string[]): GalleryImage[] {
    return fileNames.map((fileName, index) => ({
      src: `/gallery/${folder}/${fileName}`,
      alt: `${folder} project photo ${index + 1}`
    }));
  }
}
