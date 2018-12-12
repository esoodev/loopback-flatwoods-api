import {Entity, model, property} from '@loopback/repository';

@model()
export class Notification extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  notificationId?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  notificationTypeId: number;

  @property({
    type: 'string',
  })
  notificationRedirectUrl?: string;

  @property({
    type: 'string',
    required: true,
  })
  notificationContent: string;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  statusId: number;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @property({
    type: 'date',
  })
  dismissedAt?: string;

  constructor(data?: Partial<Notification>) {
    super(data);
  }
}
