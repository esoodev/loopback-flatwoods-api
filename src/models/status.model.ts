import {Entity, model, property} from '@loopback/repository';

@model()
export class Status extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  statusId?: number;

  @property({
    type: 'string',
    required: true,
  })
  statusName: string;

  @property({
    type: 'string',
  })
  statusDescription?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<Status>) {
    super(data);
  }
}
