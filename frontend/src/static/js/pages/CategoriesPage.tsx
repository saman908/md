import React from 'react';
import { ApiUrlConsumer } from '../utils/contexts/';
import { MediaListWrapper } from '../components/MediaListWrapper';
import { LazyLoadItemListAsync } from '../components/item-list/LazyLoadItemListAsync.jsx';
import { Page } from './Page';

interface CategoriesPageProps {
  id?: string;
  title?: string;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ id = 'categories', title = 'Categories' }) => (
  <Page id={id}>
    <ApiUrlConsumer>
      {(apiUrl) => {
        console.log('API URL:', apiUrl.archive.categories);
        console.log('Page Title:', title);

        return (
          <MediaListWrapper className="items-list-ver">
            <LazyLoadItemListAsync
              singleLinkContent={true}
              inCategoriesList={true}
              requestUrl={apiUrl.archive.categories}
            />
          </MediaListWrapper>
        );
      }}
    </ApiUrlConsumer>
  </Page>
);
