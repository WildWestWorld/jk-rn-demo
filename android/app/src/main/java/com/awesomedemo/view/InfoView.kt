package com.awesomedemo.view

import android.content.Context
import android.view.LayoutInflater
import android.view.RoundedCorner
import android.view.View
import android.view.View.OnClickListener
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.awesomedemo.R
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CircleCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContext.RCTDeviceEventEmitter
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.events.RCTEventEmitter

class InfoView(context: Context) : LinearLayout(context), OnClickListener {


    //    用于在 Android 应用中展示特定信息。在 initView 方法中，它通过 LayoutInflater 来加载名为 layout_info_view 的布局，并将其添加到 InfoView 中显示。
    private lateinit var avatarImg: ImageView;
    private lateinit var nameTxt: TextView;
    private lateinit var descTxt: TextView;
    private lateinit var changeButton: TextView;

    private var shape: String = "circle";
    private var urlImg: String = "";

    init {
        initView()
    }

    private fun initView() {


        val inflate: LayoutInflater = LayoutInflater.from(context);
        val view: View = inflate.inflate(R.layout.layout_info_view, null)
        avatarImg = view.findViewById(R.id.img_avatar)
        nameTxt = view.findViewById(R.id.text_name)
        descTxt = view.findViewById(R.id.text_des)
        changeButton = view.findViewById(R.id.changeButton)
        changeButton.setOnClickListener(this)


        val layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)

        this.addView(view, layoutParams);
    }

    fun setAvatarFromView(url: String) {
        urlImg = url;
        Glide.with(this).load(urlImg).placeholder(R.drawable.icon_avatar).into(avatarImg)
    }


    override fun onClick(v: View?) {
        if (shape == "circle") {
            shape = "round"
        } else {
            shape = "circle"
        }

        val circleCrop = CircleCrop()
        val roundedCorners = RoundedCorners(40)
        val trans = if (shape == "circle") circleCrop else roundedCorners

        Glide.with(this).load(urlImg).placeholder(R.drawable.icon_avatar).transform(trans).into(avatarImg)


        val reactContext = context as ReactContext
        println(reactContext)
        val params = Arguments.createMap()
        params.putString("shape", shape)
//        if(!reactContext.hasActiveCatalystInstance()) {
//            return;
//        }
//        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit("onShapeChange",params)
        reactContext.getJSModule(RCTEventEmitter::class.java).receiveEvent(id, "onShapeChange", params)
    }

    fun setShape(shapeArg:String){
        shape = shapeArg

        val circleCrop = CircleCrop()
        val roundedCorners = RoundedCorners(40)
        val trans = if (shape == "circle") circleCrop else roundedCorners

        Glide.with(this).load(urlImg).placeholder(R.drawable.icon_avatar).transform(trans).into(avatarImg)

    }

}


