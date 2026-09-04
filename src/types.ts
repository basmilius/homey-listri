import type App from './index';

export type ListriApp = App;

export type ListLook = {
    readonly color: string;
    readonly icon: string;

    /** The Font Awesome name behind `icon`, which itself is only the glyph the picker stored. */
    readonly iconId: string | null;
};

export type ListView = ListLook & {
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly total: number;
    readonly checked: number;
    readonly open: number;
};

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
