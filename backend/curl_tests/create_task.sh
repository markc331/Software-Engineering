#!/usr/bin/env sh

IDS="$(./get_user_id.sh)"
AASTHA_ID="$(echo "$IDS" | sed '1p;d' | jq .[0].get[0].account_id | tr -d '"')"
LOUIE_ID="$(echo "$IDS" | sed '2p;d' | jq .[0].get[0].account_id | tr -d '"')"
MADDIE_ID="$(echo "$IDS" | sed '3p;d' | jq .[0].get[0].account_id | tr -d '"')"
MARK_ID="$(echo "$IDS" | sed '4p;d' | jq .[0].get[0].account_id | tr -d '"')"
TINO_ID="$(echo "$IDS" | sed '5p;d' | jq .[0].get[0].account_id | tr -d '"')"

# Create tasks for each group member
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$AASTHA_ID"'","task_name":"task_1","category":"test","deadline":"2022-12-01","priority":"low"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$AASTHA_ID"'","task_name":"task_2","category":"test","deadline":"2022-12-02","priority":"medium"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$AASTHA_ID"'","task_name":"task_3","category":"test","deadline":"2022-12-03","priority":"high"}}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$LOUIE_ID"'","task_name":"task_1","category":"test","deadline":"2022-12-01","priority":"low"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$LOUIE_ID"'","task_name":"task_2","category":"test","deadline":"2022-12-02","priority":"medium"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$LOUIE_ID"'","task_name":"task_3","category":"test","deadline":"2022-12-03","priority":"high"}}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$MADDIE_ID"'","task_name":"task_1","category":"test","deadline":"2022-12-01","priority":"low"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$MADDIE_ID"'","task_name":"task_2","category":"test","deadline":"2022-12-02","priority":"medium"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","params":{"account_id":"'"$MADDIE_ID"'","task_name":"task_3","category":"test","deadline":"2022-12-03","priority":"high"}}' http://localhost:8000/endpoint.php
echo
