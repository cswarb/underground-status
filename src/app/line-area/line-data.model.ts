export class lineDataModel {

    $type: string;
    id: string;
    name: string;
    modeName: string;
    disruptions: any;
    created: string;
    modified: string;
    lineStatuses: any;
    routeSections: any;
    serviceTypes: any;
    crowding: any;

}

export class lineDisruptionDataModel {

    $type: string;
    created: string;
    disruption: any;
    id: number;
    lineId: string;
    reason: string;
    statusSeverity: number;
    statusSeverityDescription: string;
    validityPeriods: any;

}