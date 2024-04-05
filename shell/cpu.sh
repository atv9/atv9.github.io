#!/system/bin/sh
su

echo "powersave" > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy1/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy2/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy3/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy4/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy5/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor
echo "powersave" > /sys/devices/system/cpu/cpufreq/policy7/scaling_governor

echo "1200000" > /sys/devices/system/cpu/cpufreq/policy0/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy1/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy2/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy3/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy4/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy5/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy6/scaling_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy7/scaling_max_freq

echo "1200000" > /sys/devices/system/cpu/cpufreq/policy0/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy1/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy2/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy3/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy4/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy5/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy6/cpuinfo_max_freq
echo "1200000" > /sys/devices/system/cpu/cpufreq/policy7/cpuinfo_max_freq


resetprop persist.sys.mouse.right.back true
resetprop persist.service.audio.useFixedVolume false

resetprop persist.sys.nativebridge 1
resetprop persist.service.bdroid.bdaddr 22:22:67:c6:69:73
resetprop persist.sys.timezone Asia/Baku
resetprop persist.sys.locale ru-RU
resetprop persist.sys.hw_statistics false
resetprop persist.sys.webview.vmsize 253216936
settings put system sound_effects_enabled 0
media volume --set 25
system volume --set 25
settings put global package_verifier_user_consent -1
settings put install_non_market_apps true


echo "return 0" > /sdcard/cpu.sh

return 0
