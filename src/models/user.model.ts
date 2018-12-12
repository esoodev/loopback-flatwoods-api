import {Entity, model, property, hasMany} from '@loopback/repository';
import {UserInventory} from './user-inventory.model';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  userId?: number;

  @property({
    type: 'string',
    required: true,
  })
  userEmail: string;

  @property({
    type: 'string',
  })
  userNickname?: string;

  @property({
    type: 'string',
  })
  userFirstName?: string;

  @property({
    type: 'string',
  })
  userLastName?: string;

  @property({
    type: 'string',
  })
  userAddress?: string;

  @property({
    type: 'string',
    required: true,
  })
  userPassword: string;

  @property({
    type: 'string',
  })
  userPasswordSalt?: string;

  @property({
    type: 'string',
  })
  userPhone?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  statusId?: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @hasMany(() => UserInventory)
  userInventories: UserInventory[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}
