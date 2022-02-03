import { SvelteComponentTyped } from "svelte";
import type { IAccordionItem } from "./types";
import type { Key } from "../state/collection/selection";
declare const __propDef: {
    props: {
        /** Wheter to allow multiple items to be open at the same time or not. */ multiple?: boolean | undefined;
        /** Item objects in the collection. */ items?: IAccordionItem[] | undefined;
        /** The currently selected keys in the collection. */ selectedKeys?: Set<Key> | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AccordionProps = typeof __propDef.props;
export declare type AccordionEvents = typeof __propDef.events;
export declare type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
