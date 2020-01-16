import React from 'react';
import { Route } from './'

export default function(OldComponent){
    return props=> (
        <Route render={
            routerProps => <OldComponent {...props} {...routerProps}/>
        }/>
    )
}