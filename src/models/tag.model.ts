import {Entity, model, property} from '@loopback/repository';

@model()
export class Tag extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  tagId?: number;

  @property({
    type: 'string',
    required: true,
  })
  tagName: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<Tag>) {
    super(data);
  }
}
