#include <NewPing.h>

#define TRIG_PIN 10
#define ECHO_PIN 9
#define MAX_DISTANCE 200

NewPing sonar(TRIG_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(9600);
}

void loop() {
  delay(50);
  unsigned int distance = sonar.ping_cm();
  if (distance > 0 && distance <= 10) {
    if (distance == 10) {
      Serial.println("Water level is normal");
    } else if (distance == 7) {
      Serial.println("Water level is increasing");
    } else if (distance == 5) {
      Serial.println("Water level is  out of contrl");
    }
  }
}
