import {
  Entity,
  model,
  property,
  hasMany,
  belongsTo,
} from '@loopback/repository';
import {ListingType, ListingComment} from './';

@model()
export class Listing extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  listingId?: number;

  @property({
    type: 'number',
    required: true,
  })
  gameId: number;

  @property({
    type: 'string',
    required: true,
  })
  listingTitle: string;

  @property({
    type: 'string',
    required: true,
  })
  listingDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  packageId: number;

  @property({
    type: 'number',
    default: 1,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @property({
    type: 'date',
  })
  endsAt?: string;

  @hasMany(() => ListingComment)
  listingComments?: ListingComment[];

  @belongsTo(() => ListingType)
  listingTypeId: number;

  constructor(data?: Partial<Listing>) {
    super(data);
  }
}
