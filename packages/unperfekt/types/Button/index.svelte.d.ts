import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        VARIANT?: {
            readonly primary: "Button--primary";
            readonly outline: "Button--outline";
            readonly dark: "Button--dark";
            readonly danger: "Button--danger";
            readonly "on-danger": "Button--on-danger";
        } | undefined;
        SIZE?: {
            readonly small: "Button--small";
            readonly fixed: "Button--fixed";
            readonly large: "Button--large";
            readonly fill: "Button--fill";
        } | undefined;
        variant?: "primary" | "outline" | "dark" | "danger" | "on-danger" | undefined;
        size?: "small" | "fixed" | "large" | "fill" | undefined;
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
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
/**
 * @example
 * <Button>
 * Text
 * </Button>
 */
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
    get VARIANT(): {
        readonly primary: "Button--primary";
        readonly outline: "Button--outline";
        readonly dark: "Button--dark";
        readonly danger: "Button--danger";
        readonly "on-danger": "Button--on-danger";
    };
    get SIZE(): {
        readonly small: "Button--small";
        readonly fixed: "Button--fixed";
        readonly large: "Button--large";
        readonly fill: "Button--fill";
    };
}
export {};
