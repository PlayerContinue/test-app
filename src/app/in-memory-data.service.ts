import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const registration = [
            {
                "controlType": "textbox",
                "key": "parent1Name",
                "label": "Parent Name",
                "value": "",
                "required": true,
                "order": 1,
                "row":1,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email1",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row":1,
                "labelPosition":"left",
                "type":"email"
            },
            {
                "controlType": "textbox",
                "key": "homeAddress1",
                "label": "Home Address",
                "value": "",
                "required": false,
                "order": 1,
                "row":2,
                "labelPosition":"left"

            },
            {
                "controlType": "textbox",
                "key": "homePhone1",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone1",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "cellPhone1",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "parentName2",
                "label": "Parent Name",
                "value": "",
                "required": true,
                "order": 1,
                "row":4,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email2",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row":4,
                "labelPosition":"left",
                "type":"email"
            },
            {
                "controlType": "textbox",
                "key": "homeAddress2",
                "label": "Home Address",
                "value": "",
                "required": false,
                "order": 1,
                "row":5,
                "labelPosition":"left"

            },
            {
                "controlType": "textbox",
                "key": "homePhone2",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":6,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone2",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":7,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "cellPhone2",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":7,
                "labelPosition":"left"
            }




            /*{
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
                "value": "",
                "required": true,
                "order": 1
            }
            ,


            {
                "controlType": "textbox",
                "key": "emailAddress",
                "label": "Email",
                "type": "email",
                "order": 2
            }*/
        ];

        const heroes = [
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
        return { heroes, registration };
    }
}
