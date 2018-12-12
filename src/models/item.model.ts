import {Entity, model, property} from '@loopback/repository';

@model()
export class Item extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  itemId?: number;

  @property({
    type: 'string',
    required: true,
  })
  itemName: string;

  @property({
    type: 'string',
  })
  itemDescription?: string;

  @property({
    type: 'number',
  })
  itemCount?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  itemIsUnique?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  gameId: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}
