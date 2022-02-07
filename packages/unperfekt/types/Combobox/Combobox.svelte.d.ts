import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ComboboxProps = typeof __propDef.props;
export declare type ComboboxEvents = typeof __propDef.events;
export declare type ComboboxSlots = typeof __propDef.slots;
export default class Combobox extends SvelteComponentTyped<ComboboxProps, ComboboxEvents, ComboboxSlots> {
    get value(): string;
}
export {};
