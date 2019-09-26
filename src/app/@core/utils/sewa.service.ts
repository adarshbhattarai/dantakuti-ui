import { of as observableOf,  Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Sewa, ServiceData} from '../data/sewa';

@Injectable({
  providedIn: 'root'
})
export class SewaService extends ServiceData {

  private sewa: Sewa[]  = [
    {name: "Dental CheckUp", shortDesc: "X-Ray and many more" , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/Picture39.png", cost: "500", description: "There are 2 parts to a regular dental visit – check up, or examination and the cleaning, or oral prophylaxis. At the dental check up your dental professional will check for cavities. X-rays might be taken to detect cavities between your teeth. The exam will also include a check for plaque and tartar on your teeth."},
    {name: "Filling",shortDesc: "Dental Restoration" , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/filling.png", cost: "5000", description: "To treat a cavity your dentist will remove the decayed portion of the tooth and then \"fill\" the area on the tooth where the decayed material was removed. Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding"},
    {name: "Scaling", shortDesc: "Scaling aLong with root planing" ,picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/Scaling.png", cost: "4000", description: "Dental scaling is routinely performed to help patients with gum disease and excessive plaque buildup. While a standard cleaning will address the surface of the tooth, scaling goes much deeper. If your dentist suggests dental scaling and root planing for your teeth, it’s helpful to know what this means so you can prepare for what’s ahead."},
    {name: "Ortho",shortDesc: "Using long lasting braces" , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/OrthoDontics.png", cost: "6000", description: "Orthodontists help with crooked teeth, but they assist patients with other issues as well. These include overbites and underbites, crossbites, spaces between teeth, overcrowding of teeth, and the treatment of temporomandibular disorders (TMD). Additional problems with the jaw also need to be treated by an orthodontist."},
    {name: "Bleaching", shortDesc: "Best teeth whitening formula" ,picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/bleaching.png", cost: "18000", description: "Bleaching your teeth changes the colour of the tooth enamel and removes both surface stains and those deeper in the teeth. ... The chemical used to bleach teeth is generally carbamide peroxide. Different products use different concentrations of this chemical."},
    {name: "RCT",shortDesc: "Root Canal Treatment" , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/rootcanal.jpg", cost: "40000", description: "Rct / Root Canal Treatment Is Painless and Can Save Your Tooth. It is a procedure where a badly decayed or fractured or dead tooth is saved by removing its soft part (pulp) from the crown & the root of the tooth. Pulp is located in the core of the crown & root of the tooth."},
    {name: "Extraction", shortDesc: "Tooth Extraction" ,picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/extraction.jpg", cost: "6000", description: "A tooth extraction is an outpatient procedure performed by a dentist. In some cases pulling teeth (removing a tooth completely from its spot in the jaw bone), may be necessary to preserve or improve your dental health."},
    {name: "Cap and Crown",shortDesc: "Restores the tooth to its normal shape, size, and function." , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/capcrown.jpg", cost: "9000", description: "A crown and a cap are the same. Cap is the layman's term for a crown. A crown is a prosthetic treatment for a broken or badly decayed tooth. It is cemented onto the tooth after the dentist has prepared the tooth. Crowns can be made to look like natural teeth."}
    // {name: "Pus/abscess",shortDesc: "pip ko photo hala" , picture: "https://dantakuti.s3.us-east-2.amazonaws.com/public/picture/capcrown.jpg", cost: "9000", description: "A crown and a cap are the same. Cap is the layman's term for a crown. A crown is a prosthetic treatment for a broken or badly decayed tooth. It is cemented onto the tooth after the dentist has prepared the tooth. Crowns can be made to look like natural teeth."}
  ];

  getServices(): Observable<Sewa[]> {
    return observableOf(this.sewa);
  }
}
