/**
 * @author Chris Humboldt
 */

 export enum State {
    ACTIVE = 'active',
    CLOSED = 'closed',
    HIDDEN = 'hidden',
    INACTIVE = 'inactive',
    OPEN = 'open',
    TOGGLED = 'toggled',
    VISIBLE = 'visible'
}

export enum OpposingState {
   ACTIVE = 'inactive',
   CLOSED = 'open',
   HIDDEN = 'visible',
   INACTIVE = 'active',
   OPEN = 'closed',
   TOGGLED = 'toggled',
   VISIBLE = 'hidden'
}
