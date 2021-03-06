export interface IRootObject {
    elements: IElementsItem[];
    generator: string;
    osm3s: IOsm3s;
    version: number;
}
export interface IOsm3s {
    copyright: string;
    timestamp_osm_base: string;
}
export interface IElementsItem {
    id: number;
    lat?: number;
    lon?: number;
    members?: IMembersItem[];
    nodes?: number[];
    tags?: ITags;
    type: string;
}
export interface ITags {
    'addr:city'?: string;
    'addr:conscriptionnumber'?: string;
    'addr:country'?: string;
    'addr:housenumber'?: string;
    'addr:place'?: string;
    'addr:postcode'?: string;
    'addr:provisionalnumber'?: string;
    'addr:street'?: string;
    'addr:streetnumber'?: string;
    'addr:suburb'?: string;
    'building:flats'?: string;
    'building:levels'?: string;
    'building:material'?: string;
    'building:min_level'?: string;
    'building:part'?: string;
    'building:ruian:type'?: string;
    'bus:lanes'?: string;
    'contact:email'?: string;
    'contact:facebook'?: string;
    'contact:foursquare'?: string;
    'contact:google_plus'?: string;
    'contact:phone'?: string;
    'contact:twitter'?: string;
    'contact:website'?: string;
    'contact:yelp'?: string;
    'cycleway:both'?: string;
    'cycleway:left'?: string;
    'cycleway:right'?: string;
    'description:en'?: string;
    'disused:route'?: string;
    'embedded_rails:lanes'?: string;
    'garden:type'?: string;
    'historic:amenity'?: string;
    'internet_access:fee'?: string;
    'internet_access:type'?: string;
    'lanes:backward'?: string;
    'lanes:bus'?: string;
    'lanes:forward'?: string;
    'maxspeed:type'?: string;
    'name:cs'?: string;
    'name:da'?: string;
    'name:de'?: string;
    'name:hu'?: string;
    'name:it'?: string;
    'name:sk'?: string;
    'payment:bitcoin'?: string;
    'public_transport:version'?: string;
    'recycling:batteries'?: string;
    'recycling:books'?: string;
    'recycling:cans'?: string;
    'recycling:clothes'?: string;
    'recycling:glass'?: string;
    'recycling:paper'?: string;
    'recycling:plastic'?: string;
    'ref:redizo'?: string;
    'ref:ruian:addr'?: string;
    'ref:ruian:building'?: string;
    'roof:levels'?: string;
    'roof:shape'?: string;
    'source:addr'?: string;
    'source:loc'?: string;
    'source:maxspeed'?: string;
    'source:name'?: string;
    'turn:lanes:backward'?: string;
    'turn:lanes:forward'?: string;
    'turn:lanes'?: string;
    'uir_adr:ADRESA_KOD'?: string;
    'vehicle:conditional'?: string;
    access?: string;
    amenity?: string;
    area?: string;
    artist_name?: string;
    artwork_type?: string;
    atm?: string;
    barrier?: string;
    bicycle_parking?: string;
    bicycle?: string;
    brand?: string;
    brewery?: string;
    Brewery?: string;
    bridge?: string;
    building?: string;
    bus?: string;
    busway?: string;
    cables?: string;
    capacity?: string;
    circuits?: string;
    collection_times?: string;
    colour?: string;
    complete?: string;
    covered?: string;
    craft?: string;
    created_by?: string;
    crossing_ref?: string;
    crossing?: string;
    cuisine?: string;
    cycleway?: string;
    direction?: string;
    electrified?: string;
    email?: string;
    embedded_rails?: string;
    end_date?: string;
    entrance?: string;
    fee?: string;
    fence_type?: string;
    fixme?: string;
    foot?: string;
    footway?: string;
    frequency?: string;
    from?: string;
    gauge?: string;
    height?: string;
    highway?: string;
    image?: string;
    incline?: string;
    indoor_seating?: string;
    landuse?: string;
    lanes?: string;
    layer?: string;
    leisure?: string;
    lit?: string;
    location?: string;
    man_made?: string;
    material?: string;
    maxspeed?: string;
    motor_vehicle?: string;
    motorcar?: string;
    motorcycle?: string;
    name?: string;
    natural?: string;
    network?: string;
    noname?: string;
    note?: string;
    office?: string;
    official_name?: string;
    oneway?: string;
    opening_hours?: string;
    operator?: string;
    outdoor_seating?: string;
    parking?: string;
    phone?: string;
    power?: string;
    public_transport?: string;
    railway?: string;
    ramp?: string;
    rating?: string;
    recycling_type?: string;
    ref?: string;
    restriction?: string;
    route?: string;
    service?: string;
    shelter_type?: string;
    shop?: string;
    short_name?: string;
    smoking?: string;
    smoothness?: string;
    source?: string;
    sport?: string;
    start_date?: string;
    state?: string;
    street_cabinet?: string;
    substation?: string;
    supervised?: string;
    surface?: string;
    surveillance?: string;
    tactile_paving?: string;
    takeaway?: TTakeawayOpts;
    text_color?: string;
    to?: string;
    toilets?: TToiletsOpts;
    tourism?: TTourismOpts;
    traffic_calming?: string;
    tram?: TTramOpts;
    transformer?: TTransformerOpts;
    tunnel?: TTunnelOpts;
    type?: TTypeOpts;
    vehicle?: TVehicleOpts;
    vending?: TVendingOpts;
    voltage?: TVotlageOpts;
    website?: string;
    wheelchair?: string;
    wikidata?: string;
    wikipedia?: string;
}
export interface IMembersItem {
    type: string;
    ref: number;
    role: string;
}




export type TTakeawayOpts
  yes
only
no
(other)


export type
  yes
no
(other)

export type TTourismOpts =
information
hotel
attraction
viewpoint
guest_house
picnic_site
artwork
camp_site
museum
hostel
chalet
(other)

export type TTramOpts =
  yes
(other)

export type TTransformerOpts =
    distribution
    minor_distribution
    yes
    (other)
export type TTunnelOpts =
culvert
yes
building_passage
(other)
export type TTypeOpts =
    multipolygon
    restriction
    route
    boundary
    associatedStreet
    public_transport
    site
    (other)

export type TVehicleOpts =
    'no' |
    'yes' |
    'destination' |
    'agricultural' |
    'private' |
    'forestry' |
    '(other)'
export type TVendingOpts =
    'parking_tickets' |
    'cigarettes' |
    'excrement_bags' |
    'public_transport_tickets' |
    'drinks' |
    'fuel' |
    'parcel_pickup' |
    'parcel_mail_in' |
    'sweets' |
    '(other)';
export type TVotlageOpts =
    '25000' |
    '15000' |
    '3000' |
    '1500' |
    '110000' |
    '20000' |
    '750' |
    '600' |
    '132000' |
    '220000' |
    '138000' |
    '(other)'
export type TWheelchairOpts =
    'yes' |
    'no' |
    'limited' |
    'other'
