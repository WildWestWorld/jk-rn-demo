package com.awesomedemo.viewManager

import android.view.View
import com.awesomedemo.view.InfoView
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.uimanager.annotations.ReactProp

class InfoViewManager : SimpleViewManager<InfoView>() {
    override fun getName(): String {
        return "NativeInfoView"
    }

    override fun createViewInstance(p0: ThemedReactContext): InfoView {

        return InfoView(p0)
    }

    @ReactProp(name = "avatar")
    fun setAvatarFromRN(view: InfoView, url: String) {
        view.setAvatarFromView(url)
    }

    //    对外冒泡方法
    override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
        return mapOf(
                "onShapeChange" to mapOf(
                        "phasedRegistrationNames" to mapOf(
                                "bubbled" to "onShapeChange"
                        )
                )
        )
    }


    override fun getCommandsMap(): MutableMap<String, Int> {
//        这里设置的其实是 事件的id 下面会用在commandId上
        return mutableMapOf("setShape" to SET_SHAPE_CODE)
    }

    override fun receiveCommand(root: InfoView, commandId: String?, args: ReadableArray?) {
        val command = commandId?.toInt()
        if(command == SET_SHAPE_CODE){
            val shape = args?.getString(0)
            if (shape != null) {
                root.setShape(shape)
            }


        }else{
            super.receiveCommand(root, commandId, args)

        }







    }

    companion object {
        const val SET_SHAPE_CODE:Int = 100
    }
}