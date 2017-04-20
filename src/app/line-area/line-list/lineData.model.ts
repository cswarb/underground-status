export class lineDataModel {
  "$type": string;
  "id": string;
  "name": string;
  "modeName": string;
  "disruptions": any;
  "created": string;
  "modified": string;
  "lineStatuses": any;
  "routeSections": any;
  "serviceTypes": any;
  "crowding": {
    "$type": string;
  }  
}

// export class lineDataModel {
//   "$type": string;
//   "id": string;
//   "name": string;
//   "modeName": string;
//   "disruptions": any;
//   "created": string;
//   "modified": string;
//   "lineStatuses": [
//     {
//       "$type": string;
//       "id": number;
//       "lineId": string;
//       "statusSeverity": number;
//       "statusSeverityDescription": string;
//       "reason": string;
//       "created": string;
//       "validityPeriods": [
//         {
//           "$type": string;
//           "fromDate": string;
//           "toDate": string;
//           "isNow": boolean;
//         }
//       ]
//       "disruption": {
//         "$type": string;
//         "category": string;
//         "categoryDescription": string;
//         "description": string;
//         "affectedRoutes": any;
//         "affectedStops": any;
//         "isBlocking": boolean;
//         "closureText": string;
//       }
//     }
//   ]
//   "routeSections": any;
//   "serviceTypes": [
//     {
//       "$type": string;
//       "name": string;
//       "uri": string;
//     }
//   ]
//   "crowding": {
//     "$type": string;
//   }  
// }