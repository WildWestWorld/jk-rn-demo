package com.awesomedemo.viewManager

import android.view.View
import com.awesomedemo.view.InfoView
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManager

class InfoViewManager :SimpleViewManager<InfoView>() {
    override fun getName(): String {
        return "NativeInfoView"
    }

    override fun createViewInstance(p0: ThemedReactContext): InfoView {

        return InfoView(p0)
    }
}