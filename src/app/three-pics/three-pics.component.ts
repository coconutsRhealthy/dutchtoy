import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-three-pics',
  templateUrl: './three-pics.component.html',
  styleUrls: ['./three-pics.component.css']
})
export class ThreePicsComponent implements OnInit {

  picsToShow = [];
  tagToFilter = null;
  instaFooterCssClass = "footer-insta-button-initial";
  tagsWithOneOccurrence = [];

  dropdownSelectedValue = "Choose tag";

  constructor(private _lightbox: Lightbox) {

  }

  ngOnInit(): void {

  }

  open(index: number): void {
    this._lightbox.open(this.picsToShow, index);
  }

  close(): void {
    this._lightbox.close();
  }

  filterPics(tagToFilter) {
    this.instaFooterCssClass = "footer-insta-button-expanded";
    this.dropdownSelectedValue = tagToFilter.substring(0, tagToFilter.indexOf(" "));
    this.tagToFilter = tagToFilter;
    this.picsToShow = [];
    var counter = 0;

    for (var i = 0; i < this.allPicsData.length; i++) {
      var a = this.tagToFilter;
      a = a.substring(0, a.indexOf(" "));

      var b = this.allPicsData[i].tag.split(" ");

      for(var z = 0; z < b.length; z++) {
        if(a === b[z] ||
            (a === "Other" && b.every(bElement => this.tagsWithOneOccurrence.includes(bElement)))) {
          var instaLinkUrl = this.allPicsData[i].url.substring(0, this.allPicsData[i].url.indexOf("media"));
          const src = this.allPicsData[i].url;
          const caption = "<a href=" + instaLinkUrl + ">View on Instagram<a>";
          const thumb = this.allPicsData[i].url;
          const picData = {
             src: src,
             caption: caption,
             thumb: thumb
          };

          this.picsToShow.push(picData);
          counter++;
        }
      }
    }
  }

    allPicsData = [
      {
      "url": "https://www.instagram.com/p/CEesGzwp76K/media/?size=l",
      "tag": "Again"
      },
      {
      "url": "https://www.instagram.com/p/CEcHfOupzbE/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/CEZjTNWpuk4/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CEW92Taplfs/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/CEUYx-gptra/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/CER2QKnJv95/media/?size=l",
      "tag": "Riser Misc"
      },
      {
      "url": "https://www.instagram.com/p/CEPPI6FJgLk/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CEMqrQ-JPQf/media/?size=l",
      "tag": "Re-g"
      },
      {
      "url": "https://www.instagram.com/p/CEKFksNpKr0/media/?size=l",
      "tag": "Wise"
      },
      {
      "url": "https://www.instagram.com/p/CEHhX_BJllx/media/?size=l",
      "tag": "Again"
      },
      {
      "url": "https://www.instagram.com/p/CEE8D6tJH_M/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CECXNB1pbVO/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/CD_ye2dJEaW/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CD9NqFBpVGH/media/?size=l",
      "tag": "Mickey"
      },
      {
      "url": "https://www.instagram.com/p/CD6ozO9J7iL/media/?size=l",
      "tag": "Boogie"
      },
      {
      "url": "https://www.instagram.com/p/CD4EN-fpXc2/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/CD1fUH3pSKj/media/?size=l",
      "tag": "Sender"
      },
      {
      "url": "https://www.instagram.com/p/CDy6mJrprVg/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CDwVhhJp4u6/media/?size=l",
      "tag": "Stu"
      },
      {
      "url": "https://www.instagram.com/p/CDtw0Q-pIMf/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/CDonqCspKBi/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/CDjeXsVJCZ9/media/?size=l",
      "tag": "MSA"
      },
      {
      "url": "https://www.instagram.com/p/CDg5CEFpP6y/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CDeUFmWpkZf/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CDbvVUUJn0D/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CDZKcbCJknp/media/?size=l",
      "tag": "Ultras"
      },
      {
      "url": "https://www.instagram.com/p/CDWlwsGpfZ1/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CDUA99GJlHy/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/CDRcSmDJgNb/media/?size=l",
      "tag": "Pak"
      },
      {
      "url": "https://www.instagram.com/p/CDO3iHXJU9k/media/?size=l",
      "tag": "Wise"
      },
      {
      "url": "https://www.instagram.com/p/CDMSmz6pSc6/media/?size=l",
      "tag": "Set"
      },
      {
      "url": "https://www.instagram.com/p/CDJt1CJJkwg/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CDHI3YDJgsc/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/CDEkD_6pCHf/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CDB_WYHHxOr/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/CC_aikLnwiE/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CC817ZwJkqd/media/?size=l",
      "tag": "Delta"
      },
      {
      "url": "https://www.instagram.com/p/CC6RBvzJrwj/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CC3sKfJpULc/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/CC1HTNlpUa2/media/?size=l",
      "tag": "Amigos B2TF"
      },
      {
      "url": "https://www.instagram.com/p/CCyilyOJQUi/media/?size=l",
      "tag": "Come"
      },
      {
      "url": "https://www.instagram.com/p/CCv9vrMpusg/media/?size=l",
      "tag": "Serch"
      },
      {
      "url": "https://www.instagram.com/p/CCtY-8TpOgE/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/CCq0D9apCOr/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/CCoPnu5J96_/media/?size=l",
      "tag": "Polio"
      },
      {
      "url": "https://www.instagram.com/p/CClrURip0FN/media/?size=l",
      "tag": "Mickey"
      },
      {
      "url": "https://www.instagram.com/p/CCjGuQzpLoX/media/?size=l",
      "tag": "VerreOosten"
      },
      {
      "url": "https://www.instagram.com/p/CCgg_hjJwyl/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/CCd8RAApnjx/media/?size=l",
      "tag": "Ether"
      },
      {
      "url": "https://www.instagram.com/p/CCbXbWqn3E9/media/?size=l",
      "tag": "Utah"
      },
      {
      "url": "https://www.instagram.com/p/CCYyib4nXwx/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CCWNr9mJ41m/media/?size=l",
      "tag": "Sack"
      },
      {
      "url": "https://www.instagram.com/p/CCTo_F2JCdS/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CCREPrGJ-ns/media/?size=l",
      "tag": "Twice"
      },
      {
      "url": "https://www.instagram.com/p/CCOfbjZpfLJ/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CCL6kphJBNd/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/CCJV50nJjKE/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/CCGw9ampSoO/media/?size=l",
      "tag": "Aot"
      },
      {
      "url": "https://www.instagram.com/p/CCEMQa9JNVE/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CCBnb8CJKyQ/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/CB_CqdBpprV/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/CB8ebCkH_Bq/media/?size=l",
      "tag": "Utah Ether"
      },
      {
      "url": "https://www.instagram.com/p/CB55CvwHAgA/media/?size=l",
      "tag": "Twice"
      },
      {
      "url": "https://www.instagram.com/p/CB3VkKEJNgN/media/?size=l",
      "tag": "Sender Skee"
      },
      {
      "url": "https://www.instagram.com/p/CB0wKVEpeYe/media/?size=l",
      "tag": "Omce Again"
      },
      {
      "url": "https://www.instagram.com/p/CByKmPkJ4HO/media/?size=l",
      "tag": "EvolKcs"
      },
      {
      "url": "https://www.instagram.com/p/CBvlzFQJqfU/media/?size=l",
      "tag": "Smash"
      },
      {
      "url": "https://www.instagram.com/p/CBtBCgxpgi_/media/?size=l",
      "tag": "MSA"
      },
      {
      "url": "https://www.instagram.com/p/CBqcPGXJd0M/media/?size=l",
      "tag": "Jake Skee"
      },
      {
      "url": "https://www.instagram.com/p/CBn4eWLJgsm/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CBlVaaJps33/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CBit7VLpots/media/?size=l",
      "tag": "Imp"
      },
      {
      "url": "https://www.instagram.com/p/CBgJHxbp6_A/media/?size=l",
      "tag": "Kots"
      },
      {
      "url": "https://www.instagram.com/p/CBdkZxrp8TY/media/?size=l",
      "tag": "Pone"
      },
      {
      "url": "https://www.instagram.com/p/CBa_hA1pfNy/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CBYaxP0pZ-h/media/?size=l",
      "tag": "Serch"
      },
      {
      "url": "https://www.instagram.com/p/CBV130jJPu7/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/CBTRLzJJtCh/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CBQsSTRpoHp/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CBOH1rdpubr/media/?size=l",
      "tag": "Beans"
      },
      {
      "url": "https://www.instagram.com/p/CBLinJqH50w/media/?size=l",
      "tag": "Walter Afresh"
      },
      {
      "url": "https://www.instagram.com/p/CBI91h2ntvr/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CBGZJGsJpKx/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/CBD0RHupfkm/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CBBPa4hpNiq/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CA-qsbmJ4-W/media/?size=l",
      "tag": "Delta"
      },
      {
      "url": "https://www.instagram.com/p/CA8GLpHpeAX/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CA5hJxZJ12G/media/?size=l",
      "tag": "Serch"
      },
      {
      "url": "https://www.instagram.com/p/CA28R7HpuzS/media/?size=l",
      "tag": "Gast"
      },
      {
      "url": "https://www.instagram.com/p/CA0XioaHbHC/media/?size=l",
      "tag": "Pak Omce"
      },
      {
      "url": "https://www.instagram.com/p/CAxy6wOHWtn/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/CAvOBadJE76/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/CAspSqKJ0Ue/media/?size=l",
      "tag": "Bulk"
      },
      {
      "url": "https://www.instagram.com/p/CAqESUbJ654/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/CAnfbeIpgQD/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/CAk6surpiD0/media/?size=l",
      "tag": "Sender"
      },
      {
      "url": "https://www.instagram.com/p/CAiW3uPJUJ8/media/?size=l",
      "tag": "Oker"
      },
      {
      "url": "https://www.instagram.com/p/CAfxUdXJDdK/media/?size=l",
      "tag": "Moon"
      },
      {
      "url": "https://www.instagram.com/p/CAdMzw-nXbv/media/?size=l",
      "tag": "Omce"
      },
      {
      "url": "https://www.instagram.com/p/CAankfInTqQ/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CAYCvniJTrB/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/CAVeACWJ2r1/media/?size=l",
      "tag": "Mozes Serch"
      },
      {
      "url": "https://www.instagram.com/p/CAS5J0TpRG8/media/?size=l",
      "tag": "Same Frost"
      },
      {
      "url": "https://www.instagram.com/p/CAQUXd0p8Qm/media/?size=l",
      "tag": "Mickey Jake"
      },
      {
      "url": "https://www.instagram.com/p/CANwAZCJWws/media/?size=l",
      "tag": "Polos"
      },
      {
      "url": "https://www.instagram.com/p/CALK8EfpXew/media/?size=l",
      "tag": "Farao Evans"
      },
      {
      "url": "https://www.instagram.com/p/CAImA62p72V/media/?size=l",
      "tag": "Misc Again"
      },
      {
      "url": "https://www.instagram.com/p/CAGBHeEHC5_/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/CADccdZnNbp/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/CAA3lK2J6I_/media/?size=l",
      "tag": "Unknown1"
      },
      {
      "url": "https://www.instagram.com/p/B_-SvaCJKqy/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B_7uGD2pKGN/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B_5JIs_pHty/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B_2kcLPJoJ3/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/B_z_pAlpE8S/media/?size=l",
      "tag": "Serch"
      },
      {
      "url": "https://www.instagram.com/p/B_xbHE5pxFm/media/?size=l",
      "tag": "Gast"
      },
      {
      "url": "https://www.instagram.com/p/B_u2BzZHC-Z/media/?size=l",
      "tag": "Omce"
      },
      {
      "url": "https://www.instagram.com/p/B_sRUlHnVdi/media/?size=l",
      "tag": "Beaps Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B_psiy2JR32/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B_nHidXp89m/media/?size=l",
      "tag": "Wise"
      },
      {
      "url": "https://www.instagram.com/p/B_kiyrGpNon/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B_h-hhtJmyT/media/?size=l",
      "tag": "Sush"
      },
      {
      "url": "https://www.instagram.com/p/B_fZJksJlYK/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/B_c0hWsJkLv/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B_aPm5Tp9RA/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/B_XqyiJnk7v/media/?size=l",
      "tag": "Spots"
      },
      {
      "url": "https://www.instagram.com/p/B_VGPeinLP2/media/?size=l",
      "tag": "Set"
      },
      {
      "url": "https://www.instagram.com/p/B_ShVkhJcHp/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B_P8jueJ5av/media/?size=l",
      "tag": "Brush Sham"
      },
      {
      "url": "https://www.instagram.com/p/B_NX8IJJ9Sd/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B_KzC8KJhST/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B_IOD7np8px/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B_FpQrPJuYw/media/?size=l",
      "tag": "Defs Amigos"
      },
      {
      "url": "https://www.instagram.com/p/B_DEguCpK3x/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B-963IpHrOX/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/B-7WMywpTfx/media/?size=l",
      "tag": "Maty"
      },
      {
      "url": "https://www.instagram.com/p/B-4xVDrp0pq/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B-2MfMZpR9S/media/?size=l",
      "tag": "Abuse"
      },
      {
      "url": "https://www.instagram.com/p/B-znxbZJr8v/media/?size=l",
      "tag": "Rhyme"
      },
      {
      "url": "https://www.instagram.com/p/B-xDbjnp2JP/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B-ueHqjpcWN/media/?size=l",
      "tag": "Twice"
      },
      {
      "url": "https://www.instagram.com/p/B-r5myFJz5F/media/?size=l",
      "tag": "Sole"
      },
      {
      "url": "https://www.instagram.com/p/B-pUqE1HQtn/media/?size=l",
      "tag": "Skee"
      },
      {
      "url": "https://www.instagram.com/p/B-mwKMTHbSz/media/?size=l",
      "tag": "Fofs"
      },
      {
      "url": "https://www.instagram.com/p/B-kLa7spltP/media/?size=l",
      "tag": "Mario"
      },
      {
      "url": "https://www.instagram.com/p/B-hn1q-J8kk/media/?size=l",
      "tag": "Zedz"
      },
      {
      "url": "https://www.instagram.com/p/B-fBS7Yp1Ib/media/?size=l",
      "tag": "Lak"
      },
      {
      "url": "https://www.instagram.com/p/B-cc1SPJ2bb/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B-Z391QpaXc/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B-UuzJzpBJh/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B-SP7ZwHHJx/media/?size=l",
      "tag": "Foket"
      },
      {
      "url": "https://www.instagram.com/p/B-PrNyQHYE7/media/?size=l",
      "tag": "Spatie"
      },
      {
      "url": "https://www.instagram.com/p/B-NGWiAn37E/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B-KhkzWJleX/media/?size=l",
      "tag": "Tabe"
      },
      {
      "url": "https://www.instagram.com/p/B-FYJlMJ_57/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/B-CzSlUpZb-/media/?size=l",
      "tag": "Agua"
      },
      {
      "url": "https://www.instagram.com/p/B-AOYoJphvd/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B99py3OJ2WU/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B97E-7jJtE8/media/?size=l",
      "tag": "Iraso"
      },
      {
      "url": "https://www.instagram.com/p/B94gFbxntIW/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B917XygHR6D/media/?size=l",
      "tag": "Simif"
      },
      {
      "url": "https://www.instagram.com/p/B9zWbY_pP1n/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B9uM8GcJyCn/media/?size=l",
      "tag": "Arthe Wise"
      },
      {
      "url": "https://www.instagram.com/p/B9roA1IJw1T/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/B9pDxSCp9U3/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B9meqY5JZjm/media/?size=l",
      "tag": "Gast"
      },
      {
      "url": "https://www.instagram.com/p/B9j5rBKJXUu/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/B9hU4lTnR4c/media/?size=l",
      "tag": "Debiel"
      },
      {
      "url": "https://www.instagram.com/p/B9ewDtiHrfw/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B9cLRS2J35P/media/?size=l",
      "tag": "Savo"
      },
      {
      "url": "https://www.instagram.com/p/B9ZmlPpp5aw/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B9XB90PJ9a_/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B9Uc7f7JM1U/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B9R4DkGJamH/media/?size=l",
      "tag": "PFG"
      },
      {
      "url": "https://www.instagram.com/p/B9PTVxGpxZq/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/B9MukXuJ8Ml/media/?size=l",
      "tag": "Short Serch"
      },
      {
      "url": "https://www.instagram.com/p/B9KJyKPJLGJ/media/?size=l",
      "tag": "Blue Same"
      },
      {
      "url": "https://www.instagram.com/p/B9FAMmPJru-/media/?size=l",
      "tag": "Defs VT"
      },
      {
      "url": "https://www.instagram.com/p/B9CbXmjHQxI/media/?size=l",
      "tag": "Riser"
      },
      {
      "url": "https://www.instagram.com/p/B8_3Xg5Hs3T/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/B89RvAApjD5/media/?size=l",
      "tag": "FcGroningen"
      },
      {
      "url": "https://www.instagram.com/p/B86s6OiJK7h/media/?size=l",
      "tag": "Carlos"
      },
      {
      "url": "https://www.instagram.com/p/B84IO_kpqzK/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/B81jbUnpwMQ/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B8y_IziJ5ya/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B8waQGzp5a3/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B8t1AC8pGtD/media/?size=l",
      "tag": "Sush"
      },
      {
      "url": "https://www.instagram.com/p/B8rQa2MpSwS/media/?size=l",
      "tag": "Sole Farao"
      },
      {
      "url": "https://www.instagram.com/p/B8osT1pJR2u/media/?size=l",
      "tag": "Again"
      },
      {
      "url": "https://www.instagram.com/p/B8mGl6spZwT/media/?size=l",
      "tag": "Same Danc"
      },
      {
      "url": "https://www.instagram.com/p/B8jh6DCJqMk/media/?size=l",
      "tag": "Pabs"
      },
      {
      "url": "https://www.instagram.com/p/B8g9BBjJFw6/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B8eYJ2HJntA/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B8bzZIrJmMX/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B8ZOttQJvPO/media/?size=l",
      "tag": "Imp"
      },
      {
      "url": "https://www.instagram.com/p/B8WrQIYpyhK/media/?size=l",
      "tag": "Farao Smog"
      },
      {
      "url": "https://www.instagram.com/p/B8UE_IQnPVC/media/?size=l",
      "tag": "Moon"
      },
      {
      "url": "https://www.instagram.com/p/B8RgHB6HC5O/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B8O8IWfJbG_/media/?size=l",
      "tag": "Riser"
      },
      {
      "url": "https://www.instagram.com/p/B8MWsh9pes3/media/?size=l",
      "tag": "Set Jake"
      },
      {
      "url": "https://www.instagram.com/p/B8Jx0R4p98Z/media/?size=l",
      "tag": "Re-g"
      },
      {
      "url": "https://www.instagram.com/p/B8HM_a0JIwY/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B8CDTxXJQVn/media/?size=l",
      "tag": "Smog"
      },
      {
      "url": "https://www.instagram.com/p/B7_e1cYp0YV/media/?size=l",
      "tag": "Debiel"
      },
      {
      "url": "https://www.instagram.com/p/B786JcuJO1y/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B73wpTQp_s_/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B71LucOpm7z/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/B7ynvpUp5ih/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B7wB-trpHkZ/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/B7tdDB8nMzo/media/?size=l",
      "tag": "Iraso"
      },
      {
      "url": "https://www.instagram.com/p/B7q4WF2ngaA/media/?size=l",
      "tag": "Brush"
      },
      {
      "url": "https://www.instagram.com/p/B7oToG3JV4l/media/?size=l",
      "tag": "Carlos"
      },
      {
      "url": "https://www.instagram.com/p/B7jKJSDpSnQ/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B7glf7lJNHL/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B7eAScrpTeK/media/?size=l",
      "tag": "Same Bowl"
      },
      {
      "url": "https://www.instagram.com/p/B7bb2ZzpDkH/media/?size=l",
      "tag": "TopToy"
      },
      {
      "url": "https://www.instagram.com/p/B7Y3XCAJCui/media/?size=l",
      "tag": "Farao "
      },
      {
      "url": "https://www.instagram.com/p/B7JaIfKppu-/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/B6_GxrcJgLl/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B63RbFOJ-B2/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B6qghHdJOvd/media/?size=l",
      "tag": "Omce"
      },
      {
      "url": "https://www.instagram.com/p/B6lXBLNJcB2/media/?size=l",
      "tag": "Shoe"
      },
      {
      "url": "https://www.instagram.com/p/B6iyAkaJGFg/media/?size=l",
      "tag": "Various"
      },
      {
      "url": "https://www.instagram.com/p/B6gNVW_JrT_/media/?size=l",
      "tag": "Chas"
      },
      {
      "url": "https://www.instagram.com/p/B6doaRDpcSE/media/?size=l",
      "tag": "Farao Fromage"
      },
      {
      "url": "https://www.instagram.com/p/B6bDnGXp9cC/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B6YezAjJG2V/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B6V6Q8MpMLB/media/?size=l",
      "tag": "Benoi"
      },
      {
      "url": "https://www.instagram.com/p/B6TVOkCp-2I/media/?size=l",
      "tag": "Re-g Kbtr"
      },
      {
      "url": "https://www.instagram.com/p/B6OLwVMJNWq/media/?size=l",
      "tag": "Debiel"
      },
      {
      "url": "https://www.instagram.com/p/B6Lm4DCJ4Ih/media/?size=l",
      "tag": "Steen"
      },
      {
      "url": "https://www.instagram.com/p/B6JCFoJpT2i/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/B6GdNFHJPBX/media/?size=l",
      "tag": "TopToy"
      },
      {
      "url": "https://www.instagram.com/p/B6D4doDH2Mb/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B6BTk6MHBLB/media/?size=l",
      "tag": "Defs Wifi"
      },
      {
      "url": "https://www.instagram.com/p/B5-uvppp42C/media/?size=l",
      "tag": "Spatie"
      },
      {
      "url": "https://www.instagram.com/p/B55llVPpMe6/media/?size=l",
      "tag": "Carlos Farao Pak"
      },
      {
      "url": "https://www.instagram.com/p/B53AwwdptNf/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/B50cCLBJgP9/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B5x3HCppAR1/media/?size=l",
      "tag": "Basek Twice Evans"
      },
      {
      "url": "https://www.instagram.com/p/B5vSHYiJZij/media/?size=l",
      "tag": "MSA"
      },
      {
      "url": "https://www.instagram.com/p/B5st4sUgVwZ/media/?size=l",
      "tag": "Une Edge"
      },
      {
      "url": "https://www.instagram.com/p/B5qI6QPAr-b/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B5nkBQ4A6Ch/media/?size=l",
      "tag": "Pak"
      },
      {
      "url": "https://www.instagram.com/p/B5k_L1BHYqJ/media/?size=l",
      "tag": "Skee Set"
      },
      {
      "url": "https://www.instagram.com/p/B5ibcOqnNJP/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B5f1smTHv-i/media/?size=l",
      "tag": "Spots"
      },
      {
      "url": "https://www.instagram.com/p/B5dQ7KSg2zO/media/?size=l",
      "tag": "Again"
      },
      {
      "url": "https://www.instagram.com/p/B5ar9q5AJWO/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B5YHao6Ahmr/media/?size=l",
      "tag": "Astronaut"
      },
      {
      "url": "https://www.instagram.com/p/B5ViB_LgiYI/media/?size=l",
      "tag": "Re-g"
      },
      {
      "url": "https://www.instagram.com/p/B5S9JJzgEZk/media/?size=l",
      "tag": "Tos"
      },
      {
      "url": "https://www.instagram.com/p/B5QajCsgE7x/media/?size=l",
      "tag": "MCK"
      },
      {
      "url": "https://www.instagram.com/p/B5N0KSpAUTV/media/?size=l",
      "tag": "Riser Misc"
      },
      {
      "url": "https://www.instagram.com/p/B5LPRTXnxvA/media/?size=l",
      "tag": "Mario"
      },
      {
      "url": "https://www.instagram.com/p/B5IqaaYH48t/media/?size=l",
      "tag": "Gast"
      },
      {
      "url": "https://www.instagram.com/p/B5GFtuKAzR4/media/?size=l",
      "tag": "Beans"
      },
      {
      "url": "https://www.instagram.com/p/B5DgwLkgIg_/media/?size=l",
      "tag": "Tech"
      },
      {
      "url": "https://www.instagram.com/p/B5A752hA4Q8/media/?size=l",
      "tag": "Riser"
      },
      {
      "url": "https://www.instagram.com/p/B4-XOsRA_zv/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B47yjPQABay/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B42o_6EgpUn/media/?size=l",
      "tag": "Azhq"
      },
      {
      "url": "https://www.instagram.com/p/B40D39sgHy4/media/?size=l",
      "tag": "Twice Gear"
      },
      {
      "url": "https://www.instagram.com/p/B4xfd1nAGJd/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B4u6F_QA3kN/media/?size=l",
      "tag": "Grls"
      },
      {
      "url": "https://www.instagram.com/p/B4sV5ekgXaF/media/?size=l",
      "tag": "Beaps"
      },
      {
      "url": "https://www.instagram.com/p/B4pwm8OA2Mp/media/?size=l",
      "tag": "Nuke"
      },
      {
      "url": "https://www.instagram.com/p/B4nMJfIgAz_/media/?size=l",
      "tag": "Nase"
      },
      {
      "url": "https://www.instagram.com/p/B4knWSHgrfZ/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B4feNbJgTSH/media/?size=l",
      "tag": "Clit"
      },
      {
      "url": "https://www.instagram.com/p/B4c45ovAsCk/media/?size=l",
      "tag": "BCSD"
      },
      {
      "url": "https://www.instagram.com/p/B4aUFqngeRc/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B4Xw0nFAX59/media/?size=l",
      "tag": "Powey"
      },
      {
      "url": "https://www.instagram.com/p/B4VL2RFnJSQ/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B4SmW5DnRa4/media/?size=l",
      "tag": "Carlos"
      },
      {
      "url": "https://www.instagram.com/p/B4QBCG6J9sJ/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/B4Nd0EgA7SL/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B4K3a98gqBp/media/?size=l",
      "tag": "Iraso"
      },
      {
      "url": "https://www.instagram.com/p/B4ISn1zgKP9/media/?size=l",
      "tag": "Twice"
      },
      {
      "url": "https://www.instagram.com/p/B4FnjFBAro4/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B4DCsC2ACU9/media/?size=l",
      "tag": "Lak"
      },
      {
      "url": "https://www.instagram.com/p/B4AfbbfpRGf/media/?size=l",
      "tag": "Imps"
      },
      {
      "url": "https://www.instagram.com/p/B396m83p05i/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B37VrObJMkf/media/?size=l",
      "tag": "Pabs"
      },
      {
      "url": "https://www.instagram.com/p/B32LEd4pviQ/media/?size=l",
      "tag": "Amigos"
      },
      {
      "url": "https://www.instagram.com/p/B3zlftJpTcV/media/?size=l",
      "tag": "Omce"
      },
      {
      "url": "https://www.instagram.com/p/B3xBG7RpeZC/media/?size=l",
      "tag": "Oker Smog"
      },
      {
      "url": "https://www.instagram.com/p/B3ucP-OpNFa/media/?size=l",
      "tag": "Fums"
      },
      {
      "url": "https://www.instagram.com/p/B3r3Xi_gx2v/media/?size=l",
      "tag": "VT"
      },
      {
      "url": "https://www.instagram.com/p/B3pU8xrgbGg/media/?size=l",
      "tag": "Azhq"
      },
      {
      "url": "https://www.instagram.com/p/B3kJOiaAlzs/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B3hjvFPgljI/media/?size=l",
      "tag": "Gear"
      },
      {
      "url": "https://www.instagram.com/p/B3fAR_SAUBf/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B3Z1_uBgGnb/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B3XRUNIg6F8/media/?size=l",
      "tag": "Tech"
      },
      {
      "url": "https://www.instagram.com/p/B3UsdaRABLv/media/?size=l",
      "tag": "Antik"
      },
      {
      "url": "https://www.instagram.com/p/B3PjDn3HOJJ/media/?size=l",
      "tag": "Set"
      },
      {
      "url": "https://www.instagram.com/p/B3M9_i6nZ5R/media/?size=l",
      "tag": "Delta"
      },
      {
      "url": "https://www.instagram.com/p/B3KZpJNAeOM/media/?size=l",
      "tag": "Skee"
      },
      {
      "url": "https://www.instagram.com/p/B3H0HLDAExA/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B3CqsOUA8uW/media/?size=l",
      "tag": "Debiel"
      },
      {
      "url": "https://www.instagram.com/p/B3AFrDjA1W_/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B29hnbrAJSc/media/?size=l",
      "tag": "Evans"
      },
      {
      "url": "https://www.instagram.com/p/B268FkcAOdG/media/?size=l",
      "tag": "WarriorsOfWords"
      },
      {
      "url": "https://www.instagram.com/p/B24YHRpgbuH/media/?size=l",
      "tag": "Re-g"
      },
      {
      "url": "https://www.instagram.com/p/B21yMR8ArmB/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B2wsxbNgXZR/media/?size=l",
      "tag": "MSA"
      },
      {
      "url": "https://www.instagram.com/p/B2uD6tPg-iv/media/?size=l",
      "tag": "Amigos Defs"
      },
      {
      "url": "https://www.instagram.com/p/B2rgZyggkNF/media/?size=l",
      "tag": "Oker Smog"
      },
      {
      "url": "https://www.instagram.com/p/B2mWZ1nA9q9/media/?size=l",
      "tag": "Ipuls"
      },
      {
      "url": "https://www.instagram.com/p/B2iy6tEAnbC/media/?size=l",
      "tag": "Pabs"
      },
      {
      "url": "https://www.instagram.com/p/B2hLv8xgpIw/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B2em0m0gam-/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B2cDcEhAm_c/media/?size=l",
      "tag": "Jake"
      },
      {
      "url": "https://www.instagram.com/p/B2Zfv0gHYb2/media/?size=l",
      "tag": "Ger"
      },
      {
      "url": "https://www.instagram.com/p/B2UWCjcAmUR/media/?size=l",
      "tag": "Farao Smog Evans Oker"
      },
      {
      "url": "https://www.instagram.com/p/B2RvaxiA2uV/media/?size=l",
      "tag": "Fofs Delta"
      },
      {
      "url": "https://www.instagram.com/p/B2KDIySAgXP/media/?size=l",
      "tag": "Manks"
      },
      {
      "url": "https://www.instagram.com/p/B2HdhRQAHvl/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B2CUMDyH6to/media/?size=l",
      "tag": "Farao"
      },
      {
      "url": "https://www.instagram.com/p/B1_vrLuncO0/media/?size=l",
      "tag": "Blue Same"
      },
      {
      "url": "https://www.instagram.com/p/B19KxuWHL2e/media/?size=l",
      "tag": "Gast"
      },
      {
      "url": "https://www.instagram.com/p/B16m0F4A7ce/media/?size=l",
      "tag": "Rusko"
      },
      {
      "url": "https://www.instagram.com/p/B14Cpw2gKc4/media/?size=l",
      "tag": "Same"
      },
      {
      "url": "https://www.instagram.com/p/B11dd8Wg0Zt/media/?size=l",
      "tag": "Afresh"
      },
      {
      "url": "https://www.instagram.com/p/B1y438WA9F6/media/?size=l",
      "tag": "Evans"
      },
      {
      "url": "https://www.instagram.com/p/B1wUMlMAzXE/media/?size=l",
      "tag": "Defs"
      },
      {
      "url": "https://www.instagram.com/p/B1tweKeA2Tf/media/?size=l",
      "tag": "Une"
      }
    ]

    ///////
    tags = this.fillTagsDropdown();   

    fillTagsDropdown() { 
      var allTagsIncludingDuplicates = [];  

      for (var a = 0; a < this.allPicsData.length; a++) { 
        var tagsForPhoto = this.allPicsData[a].tag.split(" ");  

        for (var b = 0; b < tagsForPhoto.length; b++) { 
           allTagsIncludingDuplicates.push(tagsForPhoto[b]); 
        }
      }  

      var allUniqueTags = Array.from(new Set(allTagsIncludingDuplicates));       

      var tagNumberOccurrencesMap = new Map();

      for (var c = 0; c < allUniqueTags.length; c++) { 
        var counter = 0;

        for (var d = 0; d < this.allPicsData.length; d++) { 
          var tagsForPhoto = this.allPicsData[d].tag.split(" ");  

          for (var e = 0; e < tagsForPhoto.length; e++) { 
             if(allUniqueTags[c] === tagsForPhoto[e]) {
                counter++;
             }
          }
        }

        tagNumberOccurrencesMap.set(allUniqueTags[c], counter);
      }

      //var sortedTagNumberOccurrencesMap = new Map([...tagNumberOccurrencesMap.entries()].sort((a, b) => b[1] - a[1]));
      var sortedTagNumberOccurrencesMap = new Map([...tagNumberOccurrencesMap.entries()].sort());

      var toReturn = [];
      var otherCounter = 0;

      for (var [key, value] of sortedTagNumberOccurrencesMap.entries()) {
        if(value > 1) {
          toReturn.push(key + " (" + value + ") ");
        } else {
          otherCounter++;
          this.tagsWithOneOccurrence.push(key);
        }
      }

      toReturn.push("Other (" + otherCounter + ") ");
      return toReturn;
    }   
}
