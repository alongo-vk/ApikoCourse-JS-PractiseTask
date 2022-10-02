/*function printSeasonByMonth(month) {
        switch (month){
            case "SEPTEMBER":
            case "OCTOBER":
            case "NOVEMBER":
                console.log("autumn");
                break;

            case "DECEMBER":
            case "JANUARY":
            case "FEBRUARY":
                console.log("winter");
                break;

            case "MARCH":
            case "APRIL": 
            case "MAY":
                console.log("spring");
                break;

            case "JUNE":
            case "JULY":
            case "AUGUST":
                console.log("summer");
                break;

            default:
                console.log("not a month");
        }
        
    }
    
printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");*/

function printSeasonByMonth(month) {

    month == "SEPTEMBER" || month == "OCTOBER" || month == "NOVEMBER" ?
        console.log("autumn") : ""

    month == "DECEMBER" || month == "JANUARY" || month == "FEBRUARY" ?
        console.log("winter") : ""

    month == "MARCH" || month == "APRIL" || month == "MAY" ?
        console.log("spring") : ""

    month == "JUNE" || month == "JULY" || month == "AUGUST" ?
        console.log("summer") : ""

}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");