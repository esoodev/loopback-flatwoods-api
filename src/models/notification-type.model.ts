import {Entity, model, property, hasMany} from '@loopback/repository';
import {Notification} from './notification.model';

@model()
export class NotificationType extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  notificationTypeId?: number;

  @property({
    type: 'string',
    required: true,
  })
  notificationTypeName: string;

  @property({
    type: 'string',
  })
  notificationTypeDescription?: string;

  @hasMany(() => Notification)
  notifications?: Notification[];

  constructor(data?: Partial<NotificationType>) {
    super(data);
  }
}
