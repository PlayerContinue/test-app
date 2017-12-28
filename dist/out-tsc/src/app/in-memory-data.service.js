"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var registration = [
            {
                "controlType": "dropdown",
                "key": "brave",
                "label": "Bravery Rating",
                "options": [
                    {
                        "key": "solid",
                        "value": "Solid"
                    },
                    {
                        "key": "great",
                        "value": "Great"
                    },
                    {
                        "key": "good",
                        "value": "Good"
                    },
                    {
                        "key": "unproven",
                        "value": "Unproven"
                    }
                ],
                "order": 3
            },
            {
                "controlType": "textbox",
                "key": "firstName",
                "label": "First name",
                "value": "Bombasto",
                "required": true,
                "order": 1
            },
            {
                "controlType": "textbox",
                "key": "emailAddress",
                "label": "Email",
                "type": "email",
                "order": 2
            }
        ];
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes, registration: registration };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map