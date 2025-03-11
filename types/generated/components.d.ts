import type { Schema, Struct } from '@strapi/strapi';

export interface NewCategoryModule extends Struct.ComponentSchema {
  collectionName: 'components_new_category_modules';
  info: {
    description: '';
    displayName: 'Module';
    icon: 'bold';
  };
  attributes: {
    module_name: Schema.Attribute.String;
    unit: Schema.Attribute.Component<'new-category.unit', true>;
  };
}

export interface NewCategorySubUnit extends Struct.ComponentSchema {
  collectionName: 'components_new_category_sub_units';
  info: {
    displayName: 'SubUnit';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
  };
}

export interface NewCategorySubunits extends Struct.ComponentSchema {
  collectionName: 'components_new_category_subunits';
  info: {
    displayName: 'subunits';
    icon: 'bulletList';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface NewCategoryUnit extends Struct.ComponentSchema {
  collectionName: 'components_new_category_units';
  info: {
    description: '';
    displayName: 'Unit';
    icon: 'bold';
  };
  attributes: {
    sub_units: Schema.Attribute.Component<'new-category.subunits', true>;
    unit_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDAta extends Struct.ComponentSchema {
  collectionName: 'components_shared_d_ata';
  info: {
    displayName: 'DAta';
    icon: 'archive';
  };
  attributes: {
    news: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'new-category.module': NewCategoryModule;
      'new-category.sub-unit': NewCategorySubUnit;
      'new-category.subunits': NewCategorySubunits;
      'new-category.unit': NewCategoryUnit;
      'shared.d-ata': SharedDAta;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
