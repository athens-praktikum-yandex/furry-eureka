import { OwnProps as PageMetaProps } from '../types';
import { cutTags } from './cutTags';

export const prepareData = ({ title, description }: PageMetaProps) => ({
  title: cutTags(title),
  description: cutTags(description).substr(0, 250),
});
