import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  transactionId?: number;

  @property({
    type: 'number',
    required: true,
  })
  sellerUserId?: number;

  @property({
    type: 'number',
    required: true,
  })
  sellerPackageId: number;

  @property({
    type: 'number',
    required: true,
  })
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
  fulfilledAt?: string;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}
