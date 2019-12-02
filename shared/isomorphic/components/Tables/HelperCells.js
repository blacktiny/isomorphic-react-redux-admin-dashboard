import React from 'react';
import ImageCellView from './ImageCell';
import DeleteCell from './DeleteCell';
import EditableCell from './EditableCell';
import FilterDropdown from './FilterDropdown';

const DateCell = data => <p>{data.toLocaleString()}</p>;
const ImageCell = src => <ImageCellView src={src} />;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = text => <p>{text}</p>;

export {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
  EditableCell,
  DeleteCell,
  FilterDropdown,
};
