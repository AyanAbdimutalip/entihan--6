//                 #TAPSYRMA 1
const school = {
    name: "joo highs scool",
    number: 101,
    students: [
        {
            namestudent: "Ayan",
            topStudent: 'A',
            progress: 89,
            lessons: 5,
        },
        {
            namestudent: "Myrza",
            topStudent: 'B',
            progress: 76,
            lessons: 3,
        },
        {
            namestudent: "AbylayKhan",
            topStudent: 'C',
            progress: 80,
            lessons: 6,
        },
        {
            namestudent: "Imangali",
            topStudent: 'B',
            progress: 91,
            lessons: 7,
        },
        {
            namestudent: "Dias",
            topStudent: 'C',
            progress: 79,
            lessons: 3,
        },
        {
            namestudent: "Aibarys",
            topStudent: 'A',
            progress: 84,
            lessons: 8,
        },

    ]
}


                // #TAPSYRMA 2
const changeSchoolName = () => {
    let newNameSchool = prompt("Enter name")
    return school.name = newNameSchool
}




                // #TAPSYRMA 3
const changePhoneNumber = () => {
    let newNumberSchool = +prompt("Enter phone number")
    
    if (newNumberSchool > 0 ){
        school.number = newNumberSchool
    }else if(newNumberSchool <= 0){
        alert("False")
    }
    return school.number
}



                // #TAPSYRMA 4
const listStudentNames = () => {
    let nameStudents = ""
    nameStudents = school.students.map(nameNew => nameNew.namestudent + nameNew.namestudent)
    return nameStudents
}






                // #TAPSYRMA 5
const addStudent = () => {
    let name = prompt("Enter Name")
    let top = prompt("Enter Top")
    let progress = prompt("Enter progress")
    let lessons = prompt("Enter lessons")

    school.students.push({name,top,progress,lessons})
}



//                 #TAPSYRMA 6
// const applyDecreaseToTop = () => {
//     let nameTop = prompt("Bir topty tanda: 'A', 'B', 'C' ")
//     let newProgress = +prompt("Qansha piyzga tomendeu kerek")
//     let newPro = school.students.filter((nametops, filterStu) => nametops.nameTop === filterStu.topStudent)

    
// }
// console.log(applyDecreaseToTop());


// const progs = newPro.map(progres => progres.progress + progres.progress)
// console.log(progs);

// let result = 0
// for (let qosu = 0; 0 < progs.length -1; qosu++){
//     result += progs(qosu)
// }

// console.log(result);



const menu = () => {
    while(true){

    let surau = +prompt("1. Оқу орталығынын атауын өзгерту\n2. Телефон нөмірін өзгерту\n3. Студенттер атауын шығару\n4. Жаңа студент қосу\n5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету\n6. stop\n- Таңдауыңызды енгізіңіз:")




    if( surau === 1){
        changeSchoolName();
        console.log(school);
    } else if(surau === 2){
        changePhoneNumber()
        console.log(school);
    } else if( surau === 3){
        console.log(listStudentNames());
    } else if(surau === 4){
        addStudent()
        console.log(school);
    } else if(surau === 5){
        console.log("Bul tapsyrma ali stelmedi kute turynyz");
    }

    if(surau === 6) {
        alert("sau bolynyz"); 
        break;
    }
    if(surau < 0 && surau > 6 ){
         break;
    }
}
}
menu()

