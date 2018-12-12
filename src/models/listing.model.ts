import {Entity, model, property} from '@loopback/repository';

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
  listingTypeId: number;

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
    default: 0,
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

  constructor(data?: Partial<Listing>) {
    super(data);
  }
}
