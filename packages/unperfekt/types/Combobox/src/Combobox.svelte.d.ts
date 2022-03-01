import { SvelteComponentTyped } from "svelte";
import type { Item } from "./types";
declare class __sveltets_Render<T extends Item> {
    props(): {
        /** The id of the element. */ id?: string | undefined;
        /** The value of the Combobox input. */ value?: string | undefined;
        /** The Combobox label. */ label?: string | undefined;
        /** The list of Combobox items. */ items?: T[] | undefined;
        /** Whether the Combobox is disabled. */ disabled?: boolean | undefined;
        onInput?: ((e: Event & {
            currentTarget: EventTarget & HTMLInputElement;
        }) => void) | undefined;
    };
    events(): {
        input: CustomEvent<string>;
    };
    slots(): {
        item: {
            item: T;
        };
    };
}
export declare type ComboboxProps<T extends Item> = ReturnType<__sveltets_Render<T>['props']>;
export declare type ComboboxEvents<T extends Item> = ReturnType<__sveltets_Render<T>['events']>;
export declare type ComboboxSlots<T extends Item> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Combobox<T extends Item> extends SvelteComponentTyped<ComboboxProps<T>, ComboboxEvents<T>, ComboboxSlots<T>> {
}
export {};
