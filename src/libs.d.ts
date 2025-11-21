import type { HomeyAPIV3Local } from 'homey-api';

declare module 'homey-api' {
    declare interface HomeyAPIV3Local {
        readonly users: HomeyAPIV3Local.ManagerUsers;
    }
}
