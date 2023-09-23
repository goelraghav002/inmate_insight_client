import { createReducer } from "@reduxjs/toolkit";
console.log(window.innerWidth)
const activeMenu_initialState = {
    activeMenu: window.innerWidth < 640 ? false : true
}


export const activeMenuReducer = createReducer(activeMenu_initialState, {

    setActiveMenu: (state) => {
        state.activeMenu = !state.activeMenu;
    }

});