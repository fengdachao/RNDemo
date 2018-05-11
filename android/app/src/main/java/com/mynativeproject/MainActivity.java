package com.mynativeproject;

import android.content.res.AssetManager;
import android.content.res.Resources;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    private Bundle _saveInstance;

    private void logLifeCycle(String msg) {
        Log.i("lifecycle", msg);
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        logLifeCycle("on create.");
    }

    @Override
    protected void onStart() {
        super.onStart();
        logLifeCycle("on start.");
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        _saveInstance = outState;
        Log.i("lifecycle", "save instance");
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        Log.i("lifecycle", "restore instance");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("lifecycle:", "on pause.");
    }

    @Override
    protected void onResume() {
        super.onResume();
        logLifeCycle("on resume.");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("lifecycle:", "on stop.");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        logLifeCycle("on destroy.");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyNativeProject";
    }
}
