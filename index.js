const store = require( "./app/store" );
const { cakeActions } = require( "./features/cake/cakeSlice" );
const { iceCreamActions } = require( "./features/iceCream/iceCreamSlice" );
const fetchUsers = require( './features/user/userSlice' ).fetchUsers;

const log = console.log;

log( 'Initial state: ', store.getState() );
const unsubscribe = store.subscribe( () => { } );

// store.dispatch( cakeActions.ordered( 2 ) );
// store.dispatch( cakeActions.ordered( 3 ) );
// store.dispatch( cakeActions.restocked( 7 ) );

// store.dispatch( iceCreamActions.ordered( 5 ) );
// store.dispatch( iceCreamActions.restocked( 11 ) );

store.dispatch( fetchUsers() );

// unsubscribe();
