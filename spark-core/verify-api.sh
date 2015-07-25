#!/bin/sh

# Verify the spark core is registered
# https://github.com/voodootikigod/voodoospark#connecting-the-spark-core-to-you

curl "https://api.spark.io/v1/devices\
/$SPARK_DEVICE_ID\
/endpoint\?access_token\=\
$SPARK_TOKEN\
\}"

