import { Injectable } from '@angular/core';

export interface CaregoryItem {
    id: string;
    name: string;
    summary?: string;
    packageName?: string;
    examples?: string[];
}

export interface DemoCategory {
    id: string;
    name: string;
    items: CaregoryItem[];
    summary?: string;
}

export interface AppSection {
    name: string;
    summary: string;
  }

const ARTICLES = "articles";
const COMPONENTS = "components";

export const SECTIONS: {[key: string]: AppSection} = {
    [COMPONENTS]: {
      name: 'Components',
      summary: 'Angular Material comprises a range of components which implement common ' +
      'interaction patterns according to the Material Design specification.'
    },
    [ARTICLES]: {
      name: 'Articles',
      summary: 'The Component Dev Kit (CDK) is a set of tools that implement common interaction ' +
      'patterns whilst being unopinionated about their presentation. It represents an abstraction ' +
      'of the core functionalities found in the Angular Material library, without any styling ' +
      'specific to Material Design. Think of the CDK as a blank state of well-tested functionality ' +
      'upon which you can develop your own bespoke components.'
    },
};

const DEMO: {[key: string] : DemoCategory[] } = {
    [COMPONENTS]: [
        {
            id: 'forms',
            name: 'Form Controls',
            summary: 'Controls that collect and validate user input.',
            items: [
                {
                    id: 'autocomplete',
                    name: 'Autocomplete',
                    summary: 'Suggests relevant options as the user types.',
                    examples: [
                        'autocomplete-overview',
                        'autocomplete-simple',
                        'autocomplete-display',
                        'autocomplete-filter',
                        'autocomplete-optgroup',
                        'autocomplete-auto-active-first-option',
                    ]
                },
            ]
        }
    ],
    [ARTICLES] : [
        {
            id: 'forms',
            name: 'Form Controls',
            items: [

            ]
        }
    ]
}

const ALL_COMPONENTS = DEMO[COMPONENTS].reduce(
    (result, category) => result.concat(category.items), []);

const ALL_CDK = DEMO[ARTICLES].reduce((result, article) => result.concat(article.items), []);

const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);

@Injectable()
export class DemoItems {
    getCategories(section: string): DemoCategory[] {
        return DEMO[section];
    }

    getItemById(id: string, section: string): CaregoryItem {
        const sectionLookup = section == 'article' ? 'article' : 'material';
        return ALL_DOCS.find(doc => doc.id === id && doc.packageName == sectionLookup);
    }
} 