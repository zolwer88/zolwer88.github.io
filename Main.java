package com.example.showpng;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ImageView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Display the PNG from res/drawable/image.png
        ImageView imageView = new ImageView(this);
        imageView.setImageResource(R.drawable.image);
        setContentView(imageView);
    }
}