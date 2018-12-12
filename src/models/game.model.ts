import {Entity, model, property} from '@loopback/repository';

@model()
export class Game extends Entity {
  @property({
    type: 'number',
  })
  gameId?: number;

  @property({
    type: 'string',
    required: true,
  })
  gameName: string;

  @property({
    type: 'string',
  })
  developerName?: string;

  @property({
    type: 'string',
  })
  publisherName?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  constructor(data?: Partial<Game>) {
    super(data);
  }
}
