import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcon } from '../material-icon/MaterialIcon.jsx';
import './NavigationMenuList.scss';

function NavigationMenuListItem(props) {
  const { itemAttr = {}, text, icon, iconPos = 'left', itemType, link, linkAttr = {}, buttonAttr = {}, divAttr = {}, active = false } = props;
  
  const className = `${itemAttr.className || ''} ${itemType === 'link' ? 'link-item' : ''} ${active ? 'active' : ''}`.trim();
  
  const children = [];

  if (text) {
    if (!icon || iconPos === 'right') {
      children.push(<span key="Text">{text}</span>);
    }
  }

  if (icon) {
    children.push(
      <span key="Icon" className={`menu-item-icon ${iconPos === 'right' ? 'menu-item-icon-right' : ''} ${active ? 'active' : ''}`}>
        <MaterialIcon type={icon} />
      </span>
    );
  }

  let content;

  switch (itemType) {
    case 'link':
      content = (
        <a {...linkAttr} href={link} title={text || null}>
          {children}
        </a>
      );
      break;
    case 'button':
    case 'open-subpage':
      content = (
        <button {...buttonAttr}>
          {children}
        </button>
      );
      break;
    case 'label':
      content = (
        <button {...buttonAttr}>
          <span>{text || null}</span>
        </button>
      );
      break;
    case 'div':
      content = (
        <div {...divAttr}>
          {text || null}
        </div>
      );
      break;
    default:
      content = null;
  }

  return <li className={className} {...itemAttr}>{content}</li>;
}

NavigationMenuListItem.propTypes = {
  itemType: PropTypes.oneOf(['link', 'open-subpage', 'button', 'label', 'div']),
  link: PropTypes.string,
  icon: PropTypes.string,
  iconPos: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.string,
  active: PropTypes.bool,
  divAttr: PropTypes.object,
  buttonAttr: PropTypes.object,
  itemAttr: PropTypes.object,
  linkAttr: PropTypes.object,
};

NavigationMenuListItem.defaultProps = {
  itemType: 'link',
  iconPos: 'right',
  active: !1,
};

export function NavigationMenuList(props) {
  const { items, removeVerticalPadding = false } = props;

  return items.length ? (
    <div className={`nav-menu ${removeVerticalPadding ? 'pv0' : ''}`}>
      <nav>
        <ul>
          {items.map((item, index) => <NavigationMenuListItem key={index} {...item} />)}
        </ul>
      </nav>
    </div>
  ) : null;
}

NavigationMenuList.propTypes = {
  removeVerticalPadding: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(NavigationMenuListItem.propTypes)).isRequired,
};

NavigationMenuList.defaultProps = {
  removeVerticalPadding: false,
};
