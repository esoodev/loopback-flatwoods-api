import {Entity, model, property} from '@loopback/repository';

@model()
export class ListingComments extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  listingCommentId?: number;

  @property({
    type: 'number',
    required: true,
  })
  listingId: number;

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
    default: 0,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<ListingComments>) {
    super(data);
  }
}
