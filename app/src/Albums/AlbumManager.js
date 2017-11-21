import React, { PureComponent } from 'react';
import MultiAccordion from './MultiAccordion';

export default class AlbumManager extends PureComponent {
  render() {
    return (
      <MultiAccordion className="AlbumManager" menuName="+">
        <section header="upload">yo</section>
        <section header="remove">ho</section>
      </MultiAccordion>
    );
  }
}