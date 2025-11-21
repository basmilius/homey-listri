import type { Color, Icon } from '../types';
import BrainAware from './aware';

import knownIcons from '../../assets/app/icons.json';

export default class extends BrainAware {
    async getColors(): Promise<Color[]> {
        return [
            {hex: '#ef4444', label: this.translate('color.red')},
            {hex: '#f97316', label: this.translate('color.orange')},
            {hex: '#f59e0b', label: this.translate('color.amber')},
            {hex: '#eab308', label: this.translate('color.yellow')},
            {hex: '#84cc16', label: this.translate('color.lime')},
            {hex: '#22c55e', label: this.translate('color.green')},
            {hex: '#10b981', label: this.translate('color.emerald')},
            {hex: '#14b8a6', label: this.translate('color.teal')},
            {hex: '#06b6d4', label: this.translate('color.cyan')},
            {hex: '#0ea5e9', label: this.translate('color.sky')},
            {hex: '#3b82f6', label: this.translate('color.blue')},
            {hex: '#6366f1', label: this.translate('color.indigo')},
            {hex: '#8b5cf6', label: this.translate('color.violet')},
            {hex: '#a855f7', label: this.translate('color.purple')},
            {hex: '#d946ef', label: this.translate('color.fuchsia')},
            {hex: '#ec4899', label: this.translate('color.pink')},
            {hex: '#f43f5e', label: this.translate('color.rose')}
        ];
    }

    async getIcons(): Promise<Icon[]> {
        return knownIcons.map(icon => ({
            id: icon[0],
            name: icon[1],
            unicode: icon[2]
        }));
    }
}
