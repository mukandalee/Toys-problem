//   A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function grade(marks){
    if(marks<40){
        return "E"
    } 
    if(marks>=40 && marks<50){
        return "D"
    }
    if(marks>=50 && marks<60){
        return "C"
    }
    if(marks>=60 && marks<70){
        return "B"
    }
    
    if(marks>79){
        return "A"
    }
    
}