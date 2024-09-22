import React, { useState, useContext } from 'react';
import urlParse from 'url-parse';
import { useUser } from '../../../utils/hooks/';
import { PageStore } from '../../../utils/stores/';
import { LinksContext, SidebarContext } from '../../../utils/contexts/';
import { NavigationMenuList } from '../../_shared';
import { CategoriesPage } from '../../../pages/CategoriesPage'; // Import CategoriesPage

// Function to format menu items
function formatItems(items, currentHostPath, onClick) {
  return items.map((item) => {
    const url = urlParse(item.link);
    const active = currentHostPath === url.host + url.pathname;

    return {
      active,
      itemType: 'link',
      link: item.link || '#',
      icon: item.icon || null,
      iconPos: 'right',
      text: item.text || item.link || '#',
      itemAttr: {
        className: item.className || '',
        onClick: item.text === 'Categories' ? onClick : null, // Attach click handler if item is "Categories"
      },
    };
  });
}

export function SidebarNavigationMenu() {
  const [showCategoriesPage, setShowCategoriesPage] = useState(false); // Local state for CategoriesPage visibility
  const { userCan, isAnonymous, pages: userPages } = useUser();
  const links = useContext(LinksContext);
  const sidebar = useContext(SidebarContext);

  const currentUrl = urlParse(window.location.href);
  const currentHostPath = (currentUrl.host + currentUrl.pathname).replace(/\/+$/, '');

  // Toggle CategoriesPage visibility
  function toggleCategoriesPage() {
    setShowCategoriesPage(prev => !prev);
  }

  // Main menu first section
  function MainMenuFirstSection() {
    const items = [];

    if (!sidebar.hideHomeLink) {
      items.push({
        link: links.home,
        icon: 'home',
        text: 'سەرکی',
        className: 'nav-item-home',
      });
    }

    const featuredPage = PageStore.get('config-enabled')?.pages.featured;
    if (featuredPage?.enabled) {
      items.push({
        link: links.featured,
        icon: 'star',
        text: featuredPage.title,
        className: 'nav-item-featured',
      });
    }

    const recommendedPage = PageStore.get('config-enabled')?.pages.recommended;
    if (recommendedPage?.enabled) {
      items.push({
        link: links.recommended,
        icon: 'done_outline',
        text: recommendedPage.title,
        className: 'nav-item-recommended',
      });
    }

    const latestPage = PageStore.get('config-enabled')?.pages.latest;
    if (latestPage?.enabled) {
      items.push({
        link: links.latest,
        icon: 'new_releases',
        text: latestPage.title,
        className: 'nav-item-latest',
      });
    }

    const tagsTaxonomy = PageStore.get('config-enabled')?.taxonomies.tags;
    if (!sidebar.hideTagsLink && tagsTaxonomy?.enabled) {
      items.push({
        link: links.archive.tags,
        icon: 'local_offer',
        text: tagsTaxonomy.title,
        className: 'nav-item-tags',
      });
    }

    return (
      <NavigationMenuList key="main-first" items={formatItems(items, currentHostPath, toggleCategoriesPage)} />
    );
  }

// Main menu second section
function MainMenuSecondSection() {
  const items = [];

  const categoriesTaxonomy = PageStore.get('config-enabled')?.taxonomies.categories;
  if (!sidebar.hideCategoriesLink && categoriesTaxonomy?.enabled) {
    items.push({
      icon: 'list_alt',
      text: categoriesTaxonomy.title,
      className: 'nav-item-categories',
    });
  }

  return (
    <>
      {/* Conditionally render the navigation menu list if items are present */}
      {items.length > 0 && (
        <NavigationMenuList
          key="main-second"
          items={formatItems(items, currentHostPath)}
        />
      )}

      {/* Render the CategoriesPage component by default */}
      <CategoriesPage />
    </>
  );
}

  // User menu section
  function UserMenuSection() {
    const items = [];

    const historyPage = PageStore.get('config-enabled')?.pages.history;
    if (historyPage?.enabled) {
      items.push({
        link: links.user.history,
        icon: 'history',
        text: historyPage.title,
        className: 'nav-item-history',
      });
    }

    const likedPage = PageStore.get('config-enabled')?.pages.liked;
    if (userCan.likeMedia && likedPage?.enabled) {
      items.push({
        link: links.user.liked,
        icon: 'thumb_up',
        text: likedPage.title,
        className: 'nav-item-liked',
      });
    }

    return items.length ? <NavigationMenuList key="user" items={formatItems(items, currentHostPath)} /> : null;
  }

  // Custom menu section
  function CustomMenuSection() {
    const items = PageStore.get('config-contents')?.sidebar.navMenu?.items || [];
    return items.length ? <NavigationMenuList key="custom" items={formatItems(items, currentHostPath)} /> : null;
  }

  // Admin menu section
  function AdminMenuSection() {
    const items = [];

    if (userCan.manageMedia) {
      items.push({
        link: links.manage.media,
        icon: 'miscellaneous_services',
        text: 'Manage media',
        className: 'nav-item-manage-media',
      });
    }

    if (userCan.manageUsers) {
      items.push({
        link: links.manage.users,
        icon: 'miscellaneous_services',
        text: 'Manage users',
        className: 'nav-item-manage-users',
      });
    }

    if (userCan.manageComments) {
      items.push({
        link: links.manage.comments,
        icon: 'miscellaneous_services',
        text: 'Manage comments',
        className: 'nav-item-manage-comments',
      });
    }

    return items.length ? <NavigationMenuList key="admin" items={formatItems(items, currentHostPath)} /> : null;
  }

  // Render all sections
  return (
    <>
      <MainMenuFirstSection />
      <MainMenuSecondSection />
      <UserMenuSection />
      <CustomMenuSection />
    </>
  );
}
