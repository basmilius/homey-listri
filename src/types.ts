import type App from './index';

export type ListriApp = App;

export type ListLook = {
    readonly color: string;
    readonly icon: string;
};

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
