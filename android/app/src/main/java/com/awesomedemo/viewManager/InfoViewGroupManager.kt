package com.awesomedemo.viewManager

import com.awesomedemo.view.InfoViewGroup
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager

class InfoViewGroupManager : ViewGroupManager<InfoViewGroup>() {

    override fun getName(): String {
        return "NativeInfoViewGroup"
    }

    override fun createViewInstance(p0: ThemedReactContext): InfoViewGroup {
        return InfoViewGroup(p0);
    }
}