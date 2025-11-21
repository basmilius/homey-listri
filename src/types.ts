import type Homey from 'homey/lib/Homey';
import type App from './index';

export type Listri = App;

export type Color = {
    readonly hex: string;
    readonly label: string;
};

export type Icon = {
    readonly id: string;
    readonly name: string;
    readonly unicode: string;
};

export type Language =
    | 'en'
    | 'nl'
    | 'de'
    | 'es'
    | 'fr'
    | 'it'
    | 'ko'
    | 'no'
    | 'pl'
    | 'ru'
    | 'sv';

export type ApiRequest = {
    readonly homey: Homey & {
        readonly app: App;
    };
    readonly body: any;
    readonly params: Record<string, unknown>;
    readonly query: Record<string, string>;
};

export type WidgetApiRequest = ApiRequest & {
    readonly widgetInstanceId: string;
};
