import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

interface packageItem {
  itemId: number;
  itemCount: number;
}

@model()
export class Package extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  packageId?: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  packageItems: packageItem[];

  @property({
    type: 'date',
  })
  createdAt?: string;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Package>) {
    super(data);
  }
}
