import { IProperty } from '../Interface/Iproperty';

export class Property implements IProperty {
  Id!: number;
  name!: string;
  price!: number;
  content!: string;
  src!: string;
  alt!: string;
}
