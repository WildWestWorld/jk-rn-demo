package com.awesomedemo.view

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import com.awesomedemo.R

class InfoView(context: Context) : LinearLayout(context) {

//    用于在 Android 应用中展示特定信息。在 initView 方法中，它通过 LayoutInflater 来加载名为 layout_info_view 的布局，并将其添加到 InfoView 中显示。


    init {
            initView()
        }

        private fun initView(){


            val inflate:LayoutInflater =  LayoutInflater.from(context);
            val view:View = inflate.inflate(R.layout.layout_info_view, null)
            val layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)

            this.addView(view,layoutParams);
        }

}