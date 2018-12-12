import {Entity, model, property} from '@loopback/repository';

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

  constructor(data?: Partial<NotificationType>) {
    super(data);
  }
}
