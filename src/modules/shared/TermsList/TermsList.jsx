import React from 'react';
import classnames from 'classnames';

import style from './TermsList.module.scss';

const TermsList = ({ children, className, isLoading = true }) => {
  return <div className={classnames(style.list, className, { [style['list--loading']]: isLoading })}>{children}</div>;
};

TermsList.List = ({ children, className }) => {
  return <dl className={classnames(style.list__dl, className)}>{children}</dl>;
};

TermsList.Item = ({ term, value }) => (
  <>
    <dt className={style.list__dt}>{term}</dt>
    <dd className={style.list__dd}>{value}</dd>
  </>
);

export default TermsList;
