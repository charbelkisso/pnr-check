enum personalNumberStatus {
    Valid = "Valid",
    Invalid = "Invalid"
}

export interface responseMessage {
    personalNumber: string;
    Year?: number;
    month?: number;
    day?: number;
    control?: number;
    status: personalNumberStatus;
    text: string;
}

export default class PersonalNumber {

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

    private checkLength(): boolean {
        return (this._personalNumber.length == 12) ? true : false;
    }

    private getYear(): number {
        return Number.parseInt(this._personalNumber.substring(0, 4));
    }

    private getMonth(): number {
        return Number.parseInt(this._personalNumber.substring(4, 6));
    }

    private getDay(): number {
        return Number.parseInt(this._personalNumber.substring(6, 8));
    }

    private checkYear(): boolean {
        let minYear = 1900,
            maxYear = new Date(Date.now()).getFullYear(),
            currYear = this.getYear();

        return (currYear > minYear && currYear <= maxYear);
    }

    private checkMonth(): boolean {
        return (this.getMonth() in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }

    private checkDay(): boolean {
        return false;
    }

    private checkControl(): boolean {
        return false;
    }

    public checkPersonalNumber(): responseMessage {

        if (!this.checkLength()) {
            this._resMessage.status = personalNumberStatus.Invalid;
            this._resMessage.text = "Invalid Length";
        }
        return this._resMessage;
    }
}