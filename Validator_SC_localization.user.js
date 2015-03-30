// ==UserScript==
// @name                WME Validator Localization for South Carolina
// @namespace           https://greasyfork.org/users/6605
// @version             1.1.7.1b1
// @author              crazycaveman
// @description         This script localizes WME Validator for South Carolina, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.

  Examples:

  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},

  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "crazycaveman",
  ".updated": "2015-03-30",
  ".link": "TODO: ",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named SC- in South Carolina",
    "solutionEN": "Change name to SC-XX (if it is truly a state highway)",
    "template": "${state}:#${street}#${altStreet[#]}",
    "regexp": "/^South Carolina:.*\\b(?:State Hwy|SR-|SH-)\\b/i"
  },
  "130.solutionLink": "W:South_Carolina#Naming",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9](?![245]):.*#(?:US Hwy |US-)[0-9]+(?: ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*@/i"
  },
  "131.solutionLink": "W:Road_types/USA#Major_Highway",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9](?![2-5]):.*#(?:(?:State Hwy |SR-|SH-|IL-|IN-|K-|KY-|LA-|M-|MA-|MS-|NC-|ND-|NY-|SC-|TN-|VA-|WIS-)[0-9]+(?:| ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*|(?:US Hwy |US-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?)@/i"
  },
  "132.solutionLink": "W:Road_types/USA#Minor_Highway",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9](?![1-5]):.*#(?:State Hwy |SR-|SH-|IL-|IN-|K-|KY-|LA-|M-|MA-|MS-|NC-|ND-|NY-|SC-|TN-|VA-|WIS-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Primary_Street",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Business Abbreviated Wrong",
    "problemEN": "Business Highways should be abbreviated as BUS instead of Bus",
    "solutionEN": "Change Highway abbreviation from Bus to BUS",
    "template": "${street}",
    "regexp": "/[0-9] Bus/"
  },
  "135.enabled": true,
  "135.params": {
    "titleEN": "Wrong name on secondary road",
    "problemEN": "Secondary state roads should follow the format S-##-XXX",
    "solutionEN": "Change road name to only be S-##-XXX, where ## is the county number",
    "template": "${state}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^South Carolina:.*#(:?State (:?Rd|Road|Rte|Route) |.* S-[0-9]{1,2}-)[0-9]+/i"
  },
  "135.solutionLink": "W:South_Carolina#Naming",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  }
};
