package com.mynativeproject;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceMonitor extends ReactContextBaseJavaModule {
    public DeviceMonitor(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DeviceMonitor";
    }

    @ReactMethod
    public void show() {
        Log.i("log...", "log...");
    }
}
