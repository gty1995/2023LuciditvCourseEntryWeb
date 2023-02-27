export class Activity {
    id: string
    title: string
    subTitle: string
    description: string
    startDateTime: string

    constructor(id: string = "",
        title: string = "",
        subTitle: string = "",
        description: string = "",
        startDateTime: string = "") {
            this.id = id;
            this.title = title
            this.subTitle = subTitle
            this.description = description
            this.startDateTime = startDateTime
        }
}


export class EntryForm {
    id: string
    name: string
    email:string
    cellphone:string
    status:string
    activityId: string
    constructor( id: string = "",
        name: string = "",
        email:string = "",
        cellphone:string = "",
        status:string = "CREATE",
        activityId:string = "") {
            this.id = id;
            this.name = name
            this.email = email
            this.cellphone = cellphone
            this.status = status
            this.activityId = activityId
        }
}