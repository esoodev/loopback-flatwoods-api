import {Entity, model, property} from '@loopback/repository';

@model()
export class UserInventory extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  userInventoryId?: number;

  @property({
    type: 'number',
    required: true,
  })
  itemId: number;

  @property({
    type: 'number',
    required: true,
  })
  itemQuantity: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<UserInventory>) {
    super(data);
  }
}
