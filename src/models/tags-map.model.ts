import {Entity, model, property} from '@loopback/repository';

@model()
export class TagsMap extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  tagId: number;

  @property({
    type: 'number',
    required: true,
  })
  listingId?: number;

  constructor(data?: Partial<TagsMap>) {
    super(data);
  }
}
