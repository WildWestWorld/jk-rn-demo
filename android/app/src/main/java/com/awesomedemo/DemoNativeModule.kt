package com.awesomedemo

import com.facebook.react.bridge.ReactContextBaseJavaModule

class DemoNativeModule : ReactContextBaseJavaModule() {

    override fun getName(): String {
            return "A";
    }
}