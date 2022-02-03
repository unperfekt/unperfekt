import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | null | undefined;
        variant?: "primary" | "outline" | "dark" | "danger" | "on-danger" | undefined;
        size?: "small" | "fixed" | "large" | "fill" | undefined;
        type?: "reset" | "submit" | "button" | undefined;
        disabled?: boolean | null | undefined;
        href?: string | null | undefined;
        rel?: string | null | undefined;
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
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
/**
 * @example
 * <Button variant="primary" size="small">
 * Yahoo
 * </Button>
 */
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
