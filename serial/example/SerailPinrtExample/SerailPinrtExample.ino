float temperatur = 0;
float humidity = 0;

void setup()
{
  Serial.begin(9600);

  // 序列埠資料顯示範例，資料已 ','逗號 做為資料分割，以'\r\n' 換行 作為下一筆資料的區分。
  Serial.println("Temperature, Humidity, Volt");
  randomSeed(analogRead(A0));
  for (int i = 1; i <= 100; i++) {
    temperatur = (random(160, 300)) / 10;  // 16.0 ~ 30.0
    humidity = (random(750, 950)) / 10;    // 75.0 ~ 95.0
    Serial.println((String(temperatur)+String(",")+String(humidity)+String(",")+String(i)));
  }
}

void loop()
{

}
