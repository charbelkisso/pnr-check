export enum personalNumberStatus {
    Valid = "Valid",
    Invalid = "Invalid"
}

export interface responseMessage {
    personalNumber: string;
    length?: number;
    year?: number;
    month?: number;
    day?: number;
    control?: number;
    status: personalNumberStatus;
    text: string;
}

export default class PersonalNumber {

    // Class members
    private _personalNumber: string;
    private _resMessage: responseMessage;

    /**
     * 
     * @param pNumber Personal Numer in string format
     */
    constructor(pNumber: string) {
        this._personalNumber = pNumber;
        this._resMessage = {
            personalNumber: this._personalNumber,
            status: personalNumberStatus.Valid,
            text: "personal number OK!"
        }
    }


    public get personalNumber(): string {
        return this._personalNumber;
    }

    public set personalNumber(v: string) {
        this._personalNumber = v;
    }

    /**
     * @private
     * private method for internal usage checks the length of personal number
     * @returns {boolean} returns true if the string lenght match personal number lenght, otherwise returns flase
     */

    private checkLength = (): Boolean => this._personalNumber.length === 12 ? true : false;

    private getYear = (): number => Number.parseInt(this._personalNumber.substring(0, 4));

    private getMonth = (): number => Number.parseInt(this._personalNumber.substring(4, 6));

    private getDay = (): number => Number.parseInt(this._personalNumber.substring(6, 8));

    private getControl = (): number => Number.parseInt(this._personalNumber.substring(8));

    private checkYear(): boolean {
        let minYear = 1900,
            maxYear = new Date(Date.now()).getFullYear(),
            currYear = this.getYear();
        return (currYear > minYear && currYear <= maxYear);
    }
    private checkMonth = (): boolean => (this.getMonth() in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    private checkDay(): boolean {
        let lastDay = new Date(this.getYear(), this.getMonth(), 0).getDate(),
            currDay = this.getDay();
        return (currDay >= 1 && currDay < lastDay);
    }

    private checkControl(): boolean {
        let control = Number.parseInt(this._personalNumber.charAt(11));
        let factor = 2;
        let acc = this._personalNumber
            .trim()
            .substring(2, 11)
            .split("")
            .map(char => Number.parseInt(char))
            .reduce((accum: number, num: number) => {
                num = num * factor;
                if (num >= 10) {
                    let first = Math.trunc(num / 10);
                    let second = num % 10;
                    num = first + second;
                }
                factor = (factor == 2) ? 1 : 2;
                return accum + num;
            }, 0);
        return (control == (10 - (acc % 10)));
    }

    public checkPersonalNumber(): responseMessage {

        if (!this.checkLength()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Length";
            this._resMessage.length = this._personalNumber.length;
            return this._resMessage;
        }

        if (!this.checkYear()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Year";
            this._resMessage.length = this._personalNumber.length;
            this._resMessage.year = this.getYear();
            return this._resMessage;
        }

        if (!this.checkMonth()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Month";
            this._resMessage.length = this._personalNumber.length;
            this._resMessage.month = this.getMonth();
            return this._resMessage;
        }

        if (!this.checkDay()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Day";
            this._resMessage.length = this._personalNumber.length;
            this._resMessage.day = this.getDay();
            return this._resMessage;
        }

        if (!this.checkControl()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Control number";
            this._resMessage.length = this._personalNumber.length;
            this._resMessage.control = this.getControl();
            return this._resMessage;
        }

        this._resMessage = {
            status: personalNumberStatus.Valid,
            personalNumber: this._personalNumber,
            text: "Personal number is valid",
            control: this.getControl(),
            day: this.getDay(),
            length: this._personalNumber.length,
            month: this.getMonth(),
            year: this.getYear()
        }
        return this._resMessage;
    }
}