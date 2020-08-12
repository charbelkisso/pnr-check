

export default class PersonalNumber {

    private _personalNumber: string;

    /**
     * 
     * @param pNumber Personal Numer in string format
     */
    constructor(pNumber: string) {
        this._personalNumber = pNumber;
    }

    
    public get personalNumber() : string {
        return this._personalNumber;
    }
    
    
    public set personalNumber(v : string) {
        this._personalNumber = v;
    }
    
    /**
     * GetYear
     */
    public GetYear(): number {
        return (this._personalNumber.length > 10) ? Number.parseInt(this._personalNumber.substring(0, 3)) :
            Number.parseInt(this._personalNumber.substring(0, 1))
    }

    /**
     * CheckYear
     */
    public CheckYear(): boolean {
        return false;
    }

    /**
     * GetMonth
     */
    public GetMonth(): number {
        return 0;
    }



    public CheckPersonalNumber(): boolean {
        
        /** 
         * TODO:
         * ======================
         * 1. Get year
         * 2. Check the year
         * 3. Get Month
         * 4. Check the month
         * 5. Get day
         * 6. Check the day
         * 7. Check Control number
         *
         */

        return false;
    }
}