export class Company {

    constructor(
        public name: string = "",
        public link: string = "",
        public role: string = "",
        public address = {
            street: "",
            suite: "",
            city: "",
            zip: 0,
            state: "",
        },
        public contact = {
            name: "",
            linkedin: "",
            email: "",
            phone: "",
            notes: "",
        },
        public notes: Array<string> = [],
        public status: string = ""
    ){
    }
}
