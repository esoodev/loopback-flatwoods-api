import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Game} from './game.model';

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
    type: 'date',
  })
  createdAt?: string;

  @belongsTo(() => Game)
  gameId: number;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}
