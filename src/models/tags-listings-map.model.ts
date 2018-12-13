import {Entity, model, belongsTo} from '@loopback/repository';
import {Tag, Listing} from '.';

@model()
export class TagsListingsMap extends Entity {
  @belongsTo(() => Tag)
  tagId: number;

  @belongsTo(() => Listing)
  listingId: number;

  constructor(data?: Partial<TagsListingsMap>) {
    super(data);
  }
}
