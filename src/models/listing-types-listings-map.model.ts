import {Entity, model, property} from '@loopback/repository';

@model()
export class ListingTypesListingsMap extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  listingTypeId: number;

  @property({
    type: 'number',
    required: true,
  })
  listingId: number;

  constructor(data?: Partial<ListingTypesListingsMap>) {
    super(data);
  }
}
