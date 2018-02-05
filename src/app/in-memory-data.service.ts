import { InMemoryDbService } from 'angular-in-memory-web-api';
import {EventData} from './_Objects/eventData';
const row = 1;
const stateList = [{ key:"test","value":"Alabama" },
{ key:"test","value":"Alaska" },
{ key:"test","value":"Arizona" },
{ key:"test","value":"Arkansas" },
{ key:"test","value":"California" },
{ key:"test","value":"Colorado" },
{ key:"test","value":"Connecticut" },
{ key:"test","value":"Delaware" },
{ key:"test","value":"Florida" },
{ key:"test","value":"Georgia" },
{ key:"test","value":"Hawaii" },
{ key:"test","value":"Idaho" },
{ key:"test","value":"Illinois Indiana" },
{ key:"test","value":"Iowa" },
{ key:"test","value":"Kansas" },
{ key:"test","value":"Kentucky" },
{ key:"test","value":"Louisiana" },
{ key:"test","value":"Maine" },
{ key:"test","value":"Maryland" },
{ key:"test","value":"Massachusetts" },
{ key:"test","value":"Michigan" },
{ key:"test","value":"Minnesota" },
{ key:"test","value":"Mississippi" },
{ key:"test","value":"Missouri" },
{ key:"test","value":"Montana Nebraska" },
{ key:"test","value":"Nevada" },
{ key:"test","value":"New Hampshire" },
{ key:"test","value":"New Jersey" },
{ key:"test","value":"New Mexico" },
{ key:"test","value":"New York" },
{ key:"test","value":"North Carolina" },
{ key:"test","value":"North Dakota" },
{ key:"test","value":"Ohio" },
{ key:"test","value":"Oklahoma" },
{ key:"test","value":"Oregon" },
{ key:"test","value":"Pennsylvania Rhode Island" },
{ key:"test","value":"South Carolina" },
{ key:"test","value":"South Dakota" },
{ key:"test","value":"Tennessee" },
{ key:"test","value":"Texas" },
{ key:"test","value":"Utah" },
{ key:"test","value":"Vermont" },
{ key:"test","value":"Virginia" },
{ key:"test","value":"Washington" },
{ key:"test","value":"West Virginia" },
{ key:"test","value":"Wisconsin" },
{ key:"test","value":"Wyoming" }

];
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
                "row":row,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email1",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row":row,
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
                "row":row + 1 ,
                "labelPosition":"left"

            },
            {
                "controlType": "dropdown",
                "key": "state1",
                "label": "State",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 2,
                "labelPosition":"left",
                "options":stateList,
                "classOverride":"col-md-4"

            },
            {
                "controlType": "textbox",
                "key": "city1",
                "label": "City",
                "value": "",
                "required": false,
                "order": 1,
                "row":row + 2,
                "labelPosition":"left",
                "classOverride":"col-md-6"
            },
            {
                "controlType": "textbox",
                "key": "zipCode",
                "label": "Zip Code",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 2,
                "labelPosition":"left",
                "classOverride":"col-md-2"

            },

            {
                "controlType": "textbox",
                "key": "homePhone1",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone1",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "cellPhone1",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 3,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "parentName2",
                "label": "Parent Name",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 4,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email2",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row": row + 4,
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
                "row":row + 5,
                "labelPosition":"left"

            },
            {
                "controlType": "textbox",
                "key": "homePhone2",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 6,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone2",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 6,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "cellPhone2",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 6,
                "labelPosition":"left"
            },
            




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

            {
                "controlType": "textbox",
                "key": "parent1Name",
                "label": "Parent Name",
                "value": "",
                "required": true,
                "order": 1,
                "row":row +7,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email1",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row":row +7,
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
                "row":row + 7 ,
                "labelPosition":"left"

            },
            {
                "controlType": "dropdown",
                "key": "state1",
                "label": "State",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 8,
                "labelPosition":"left",
                "options":stateList,
                "classOverride":"col-md-4"

            },
            {
                "controlType": "textbox",
                "key": "city1",
                "label": "City",
                "value": "",
                "required": false,
                "order": 1,
                "row":row + 8,
                "labelPosition":"left",
                "classOverride":"col-md-6"
            },
            {
                "controlType": "textbox",
                "key": "zipCode",
                "label": "Zip Code",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 8,
                "labelPosition":"left",
                "classOverride":"col-md-2"

            },

            {
                "controlType": "textbox",
                "key": "homePhone1",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 9,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone1",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 9,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "cellPhone1",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 9,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "parentName2",
                "label": "Parent Name",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 10,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "email2",
                "label": "Email",
                "value": "",
                "required": true,
                "order": 2,
                "row": row + 10,
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
                "row":row + 11,
                "labelPosition":"left"

            },
            {
                "controlType": "textbox",
                "key": "homePhone2",
                "label": "Home Phone",
                "value": "",
                "required": true,
                "order": 1,
                "row":row + 12,
                "labelPosition":"left"
            },
            {
                "controlType": "textbox",
                "key": "workPhone2",
                "label": "Work Phone",
                "value": "",
                "required": false,
                "order": 2,
                "row":row + 12,
                "labelPosition":"left"
            },
            {
                "controlType": "mat-textbox",
                "key": "cellPhone2",
                "label": "Cell Phone",
                "value": "",
                "required": false,
                "order": 3,
                "row":row + 12,
                "labelPosition":"left"
            }
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

        const events = JSON.stringify(Array(50).fill(0).map((_, i) =>
        new EventData({
          id: i + 1, title: `Nav Item ${i + 1}`/*, img: 'assets/img/90px.jpg'*/,
          startDate: this.randomDate(new Date(2012, 0, 1), new Date()),
          endDate: this.randomDate(new Date(2012, 0, 1), new Date()),
          details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry\'s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it
           to make a type specimen book. It has survived not only five centuries, but
           also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
           software like Aldus PageMaker including versions of Lorem Ipsum.`
        })));
        return { heroes, registration, events };
    }
    private randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}
