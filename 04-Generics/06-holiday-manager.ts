enum TravelVacation { Abroad = 'Abroad', InCountry = 'InCountry' }

enum MountainVacation { Ski = 'Ski', Hiking = 'Hiking' }

enum BeachVacation { Pool = 'Pool', Sea = 'Sea', ScubaDiving = 'ScubaDiving' }

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('Start date cannot be after edd date!')
        }
        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date!')
        }
        this._end = val;
    }

    getInfo(): string {
        let startDate = `${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()}`;
        let endDate = `${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;

        return `Holiday: ${startDate} - ${endDate}`
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | BeachVacation | MountainVacation> implements VacationManager<T, V> {
    private vacations: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.vacations.set(holiday, vacationType);
    }

    listReservations(): string {
        return [...this.vacations.entries()].map((x) => `${x[0].getInfo()} => ${x[1]}`).join("\n")
    }
}
