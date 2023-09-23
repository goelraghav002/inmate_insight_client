import { configureStore } from "@reduxjs/toolkit";

import { activeMenuReducer } from "../reducers";

const store = configureStore({
    reducer: {
        activeMenu: activeMenuReducer
    }
})

export default store;