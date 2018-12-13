import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './';

@model()
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  transactionId?: number;

  @belongsTo(() => User, {keyFrom: 'sellerUserId'})
  sellerUserId: number;

  @property({
    type: 'number',
    required: true,
  })
  sellerPackageId: number;

  @belongsTo(() => User, {keyFrom: 'buyerUserId'})
  buyerUserId: number;

  @property({
    type: 'number',
    required: true,
  })
  buyerPackageId: number;

  @property({
    type: 'number',
    default: 15,
  })
  lifetimeInMinutes?: number;

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
  fulfilledAt?: string;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}
