import {Entity, model, property} from '@loopback/repository';

@model()
export class ListingType extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  listingTypeId?: number;

  @property({
    type: 'string',
    required: true,
  })
  listingTypeName: string;

  @property({
    type: 'string',
  })
  listingTypeDescription?: string;

  @property({
    type: 'number',
    default: 0,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<ListingType>) {
    super(data);
  }
}
