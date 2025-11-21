import type { FlowCard } from 'homey';
import { BaseAutocompleteProvider } from '../base';
import { autocomplete } from '../decorator';

@autocomplete('cycle')
export default class extends BaseAutocompleteProvider {
    async find(query: string): Promise<FlowCard.ArgumentAutocompleteResults> {
        const normalizedQuery = query.trim().toLowerCase();
        const hasQuery = normalizedQuery.length > 0;

        const users = Object.values(await this.app.api.users.getUsers());

        return users
            .filter(user => !hasQuery || user.name?.toLowerCase().includes(query.toLowerCase()))
            .map(user => ({
                id: user.id,
                name: user.name ?? user.id,
                image: user.avatar ?? undefined
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }
}
