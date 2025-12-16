import type { DateTime } from '@basmilius/homey-common';
import { Triggers } from '../flow';
import { ListDevice, ListDriver } from './base';
import type { ListItemPerson, TaskListItem } from './item';

export class BasicListDevice extends ListDevice<BasicListDriver> {

    get tasks(): TaskListItem[] {
        return this.items.filter(item => item.type === 'task');
    }

    async onInit(): Promise<void> {
        await super.onInit();

        this.log(`Basic list "${this.getName()}" has been initialized.`);
    }

    async check(id: string, checked: boolean = true): Promise<boolean> {
        const item = await this.find(id);
        const result = await super.check(id, checked);

        if (!result || !item || item.type !== 'task') {
            return false;
        }

        if (checked) {
            await Promise.allSettled([
                this.appDriver.triggerTaskChecked(this, item.content),
                this.appDriver.triggerTaskCheckedAny(this, item.content)
            ]);
        } else {
            await Promise.allSettled([
                this.appDriver.triggerTaskUnchecked(this, item.content),
                this.appDriver.triggerTaskUncheckedAny(this, item.content)
            ]);
        }

        return true;
    }

    async addTask(content: string, due?: DateTime, person?: ListItemPerson): Promise<void> {
        await this.add<TaskListItem>({
            type: 'task',
            checked: false,
            content,
            due,
            person
        });

        await this.appDriver.triggerTaskCreated(this, content, person?.name, due?.toISO() ?? undefined);
    }

    async editTask(id: string, content: string, due?: DateTime, person?: ListItemPerson): Promise<boolean> {
        const item = await this.find(id);

        if (!item || item.type !== 'task') {
            return false;
        }

        // todo(Bas): Maybe add a trigger card here for when a task is changed.
        await this.set(item, 'content', content);
        await this.set(item, 'due', due);
        await this.set(item, 'person', person);

        return true;
    }

    async findTask(content: string): Promise<TaskListItem | null> {
        return this.tasks.find(item => item.content === content) ?? null;
    }

    async findTaskId(content: string): Promise<string | null> {
        return this.tasks.find(item => item.content === content)?.id ?? null;
    }

    async removeTask(content: string): Promise<boolean> {
        const task = await this.findTask(content);

        if (!task) {
            return false;
        }

        const result = await super.remove(task.id);

        if (!result) {
            return false;
        }

        await this.appDriver.triggerTaskRemoved(this, task.content);

        return true;
    }

}

export class BasicListDriver extends ListDriver {

    async onInit(): Promise<void> {
        await super.onInit();

        this.log('Basic list driver has been initialized.');
    }

    async triggerTaskCheckedAny(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskCheckedAny)
            ?.trigger(list, {task}, {task});
    }

    async triggerTaskChecked(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskChecked)
            ?.trigger(list, {task});
    }

    async triggerTaskCreated(list: ListDevice, task: string, person?: string, due?: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskCreated)
            ?.trigger(list, {task}, {task, person: person ?? '', due: due ?? ''});
    }

    async triggerTaskRemoved(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskRemoved)
            ?.trigger(list, {task}, {task});
    }

    async triggerTaskUnchecked(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskUnchecked)
            ?.trigger(list, {task});
    }

    async triggerTaskUncheckedAny(list: ListDevice, task: string): Promise<void> {
        await this.app.registry
            .findDeviceTrigger(Triggers.TaskUncheckedAny)
            ?.trigger(list, {task}, {task});
    }

}
