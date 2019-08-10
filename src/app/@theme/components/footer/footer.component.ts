import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">&copy; Danta Kuti 2019</span>
    <div class="socials">
      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>-->
      <a href="https://www.facebook.com/Dantakuti" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.instagram.com/dantakuti/" target="_blank" class="ion ion-social-instagram"></a>
      <a href="https://twitter.com/dantakuti" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/dantakuti-dental-clinic-2761a8191/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
