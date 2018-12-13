import {Entity, model, property, belongsTo} from '@loopback/repository';
import {NotificationType} from './notification-type.model';

@model()
export class Notification extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  notificationId?: number;

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
    default: 1,
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

  @belongsTo(() => NotificationType)
  notificationTypeId: number;

  constructor(data?: Partial<Notification>) {
    super(data);
  }
}
