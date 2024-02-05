package com.awesomedemo


import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class TestActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_test)
        val tv = findViewById<TextView>(R.id.tv_test)

        // Get the intent that started this activity
        val intent = intent

        // Check if the intent contains a data URI
//        if (intent.data != null) {
//            // Get the URI from the intent
//            val data = intent.data!!
//
//            // Extract the query parameters from the URI
//            val name = data.getQueryParameter("name")
//
//            // Set the text of the TextView to display the name
//            tv.text = "姓名：$name"
//        }


        var name = intent.getStringExtra("name");
        tv.setText("姓名：" +name)



//        Log.d("TAG", intent.data.toString());

    }
}