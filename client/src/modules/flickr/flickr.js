import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ContactUpdated} from '../messages';
import {Metadata} from 'aurelia-metadata';
@inject(HttpClient)
export class Flickr{
    heading = 'Flickr';
  images = [];
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';
  
  constructor(http){
    this.http = http;
    
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    });
  }
}
