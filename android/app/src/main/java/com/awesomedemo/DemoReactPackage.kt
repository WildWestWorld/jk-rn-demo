package com.awesomedemo

import android.view.View
import android.widget.LinearLayout
import com.awesomedemo.viewManager.InfoViewGroupManager
import com.awesomedemo.viewManager.InfoViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.BaseViewManager
import com.facebook.react.uimanager.LayoutShadowNode
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class DemoReactPackage :ReactPackage{
//    调用原生方法
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList();
        modules.add(DemoNativeModule(p0))
        return modules;
    }
//调用原生页面
    override fun createViewManagers(p0: ReactApplicationContext): MutableList<BaseViewManager<out LinearLayout, LayoutShadowNode>> {
        return mutableListOf(InfoViewManager(),InfoViewGroupManager());
    }
}