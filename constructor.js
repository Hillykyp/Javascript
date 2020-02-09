function school(name, location, population, staff){
    this.name = name;
    this.location = location;
    this.population = population;
    this.staff = staff;
}

var enrolment_1 = new school("Bungoma","Kanduyi",2000,90);
document.write(school.staff );