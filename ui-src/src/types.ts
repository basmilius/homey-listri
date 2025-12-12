export type {
    ListItem as ListItemType,
    ListItemCategory as ListItemCategoryType,
    ListItemPerson as PersonType,
    ListItemType as ListItemTypeField,
    NoteListItem as NoteListItemType,
    ProductListItem as ProductListItemType,
    TaskListItem as TaskListItemType
} from '../../src/list/item';

export type { Writable } from '../../src/types';

export type ListLookType = {
    readonly color: string;
    readonly icon: string;
    readonly name: string;
    readonly type: string;
};
