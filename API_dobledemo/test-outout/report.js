$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Automation Stuff/API Automation/Leela_API-master/API_Demo/API_dobledemo/src/main/java/Features/DELETEAPI.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is to Delete  data from  API",
  "description": "",
  "id": "this-feature-is-to-delete--data-from--api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check if user is able to delete data from  API",
  "description": "",
  "id": "this-feature-is-to-delete--data-from--api;check-if-user-is-able-to-delete-data-from--api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to execute service \u003cserviceName\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I submit the Delete Mentioned request as per the data in Excel Worksheet \u003cEWorksheet\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate status code",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "this-feature-is-to-delete--data-from--api;check-if-user-is-able-to-delete-data-from--api;",
  "rows": [
    {
      "cells": [
        "serviceName",
        "EWorksheet"
      ],
      "line": 11,
      "id": "this-feature-is-to-delete--data-from--api;check-if-user-is-able-to-delete-data-from--api;;1"
    },
    {
      "cells": [
        "DeleteOrder",
        "4"
      ],
      "line": 12,
      "id": "this-feature-is-to-delete--data-from--api;check-if-user-is-able-to-delete-data-from--api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Check if user is able to delete data from  API",
  "description": "",
  "id": "this-feature-is-to-delete--data-from--api;check-if-user-is-able-to-delete-data-from--api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to execute service DeleteOrder",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I submit the Delete Mentioned request as per the data in Excel Worksheet 4",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DeleteOrder",
      "offset": 26
    }
  ],
  "location": "TestAPI.givenIwantToexecuteSercive(String)"
});
formatter.result({
  "duration": 126170300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 73
    }
  ],
  "location": "TestAPI.I_submit_DELETE_Mentioned_request(String)"
});
formatter.result({
  "duration": 22332703800,
  "status": "passed"
});
formatter.match({
  "location": "TestAPI.whenIvalidateStatusCode()"
});
formatter.result({
  "duration": 4386400,
  "status": "passed"
});
});