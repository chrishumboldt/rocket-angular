/**
 * @author Chris Humboldt
 */

export enum State {
   ACTIVE = 'active',
   CLOSED = 'closed',
   HIDDEN = 'hidden',
   INACTIVE = 'inactive',
   OFF = 'off',
   ON = 'on',
   OPEN = 'open',
   TOGGLED = 'toggled',
   VISIBLE = 'visible'
}

export enum OpposingState {
   ACTIVE = 'inactive',
   CLOSED = 'open',
   HIDDEN = 'visible',
   INACTIVE = 'active',
   OFF = 'on',
   ON = 'off',
   OPEN = 'closed',
   TOGGLED = 'toggled',
   VISIBLE = 'hidden'
}
