class Timer {

    constructor(initDate) {
        this.date = initDate
    }

    FormatDate(){
        let dayTitle = this.date.getDay()
        if(dayTitle === 1) dayTitle = `Mon`
        else if(dayTitle === 2) dayTitle = `Tue`
        else if(dayTitle === 3) dayTitle = `Wed`
        else if(dayTitle === 4) dayTitle = `Thu`
        else if(dayTitle === 5) dayTitle = `Fri`
        else if(dayTitle === 6) dayTitle = `Sat`
        else dayTitle = `Sun`

        let dayNumber = this.date.getDate()
        if(dayNumber < 10) dayNumber = `0${day}`

        let month = this.date.getMonth()+1
        if(month < 10) month = `0${month}`

        return `${dayTitle} ${dayNumber}/${month}/${this.date.getFullYear()}`  
    }

    FormatTime(){
        let hour = this.date.getHours()
        if(hour < 10) hour = `0${hour}`

        let minutes = this.date.getMinutes()+1
        if(minutes < 10) minutes = `0${minutes}`

        return `${hour}:${minutes}` 
    }

    FormatDateTime(){
        return `${this.FormatDate()} at ${this.FormatTime()}`
    }

}

const dateElt = new Timer(new Date())

console.log( 'Date : ' + dateElt.FormatDate() )
console.log( 'Time : ' + dateElt.FormatTime() )
console.log( 'Date and time : ' + dateElt.FormatDateTime() )