var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/ARIXcoin_bot?start=ref_5629897737"
//Screenshot request
if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(6900, 9000));

//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
  sleep(random(5000, 6000));
}

//android.view.View[@text="CLAIM"]
btn = className("android.view.View").text("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();