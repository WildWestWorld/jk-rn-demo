package com.awesomedemo

import com.awesomedemo.utils.DeviceUtil
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DemoNativeModule(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "App";
    }


    override fun getConstants(): MutableMap<String, Any>? {

        val map = mutableMapOf<String, Any>();
        map.put("versionName",BuildConfig.VERSION_NAME)
        map.put("versionCode",BuildConfig.VERSION_CODE)
        return map;
    }

    @ReactMethod
    fun openGallery() {
        if (currentActivity == null) {
            return;
        }

        DeviceUtil.openGallery(currentActivity)
    }

    @ReactMethod
    fun getVersionName(promise: Promise) {
        var versionName: String = BuildConfig.VERSION_NAME;
        if (versionName == null) {
            promise.reject(Throwable("获取版本失败"))
        } else {
            promise.resolve(versionName)
        }
    }

}