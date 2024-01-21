package com.awesomedemo

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class DemoReactPackage :ReactPackage{
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        val list = mutableListOf<NativeModule>();
        list.add(DemoNativeModule());
        return list;
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf();

    }
}