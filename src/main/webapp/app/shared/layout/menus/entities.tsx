import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/candidate">
      <Translate contentKey="global.menu.entities.candidate" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/candidate-test">
      <Translate contentKey="global.menu.entities.candidateTest" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/section">
      <Translate contentKey="global.menu.entities.section" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/question">
      <Translate contentKey="global.menu.entities.question" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/candidate-answer">
      <Translate contentKey="global.menu.entities.candidateAnswer" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
