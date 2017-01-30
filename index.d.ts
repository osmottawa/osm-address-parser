declare interface OSM {
  'addr:housenumber': string
  'addr:street': string
  'addr:city': string
  'addr:state': string
  'addr:country': string
}
declare function osmify (json: any): OSM;
declare namespace osmify {}
export = osmify;