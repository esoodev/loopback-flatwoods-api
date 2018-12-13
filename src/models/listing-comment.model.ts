import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Listing} from './listing.model';

@model()
export class ListingComment extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  listingCommentId?: number;

  @property({
    type: 'number',
  })
  replyOfListingCommentId?: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  comment: string;

  @property({
    type: 'number',
    default: 1,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @belongsTo(() => Listing)
  listingId: number;

  constructor(data?: Partial<ListingComment>) {
    super(data);
  }
}
