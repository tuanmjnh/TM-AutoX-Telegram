var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/pocketfi_bot/Mining?startapp=5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(6900, 9000));

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
  sleep(random(5000, 6000));
}

//android.widget.Button[@text="Claim SWITCH"]
btn = className("android.widget.Button").text("Claim SWITCH").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Claim SWITCH");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();