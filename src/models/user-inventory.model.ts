import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User, Game} from './';

interface userInventoryItem {
  itemId: number;
  itemCount: number;
}

@model()
export class UserInventory extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  userInventoryId?: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  userInventotyItems: userInventoryItem[];

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Game)
  gameId: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<UserInventory>) {
    super(data);
  }
}
