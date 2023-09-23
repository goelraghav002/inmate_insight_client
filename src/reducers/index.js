import { createReducer } from "@reduxjs/toolkit";

const activeMenu_initialState = {
    activeMenu: true
}


export const activeMenuReducer = createReducer(activeMenu_initialState, {

    setActiveMenu: (state) => {
        state.activeMenu = !state.activeMenu;
    }

});