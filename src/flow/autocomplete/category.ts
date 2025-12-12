import { autocomplete, FlowAutocompleteProvider } from '@basmilius/homey-common';
import type { FlowCard } from 'homey';
import type { ListriApp } from '../../types';
import { GROCERY_LIST_CATEGORIES } from '../../list';

@autocomplete('person')
export default class extends FlowAutocompleteProvider<ListriApp> {
    async find(query: string): Promise<FlowCard.ArgumentAutocompleteResults> {
        const normalizedQuery = query.trim().toLowerCase();
        const hasQuery = normalizedQuery.length > 0;

        return GROCERY_LIST_CATEGORIES
            .map(category => ({
                id: category.category,
                name: this.translate(`grocery.category.${category.category}`),
                image: `https://bmcdn.nl/assets/font-awesome/regular-full/${category.icon}.svg`
            }))
            .filter(category => !hasQuery || category.name?.toLowerCase().includes(query.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    }
}
