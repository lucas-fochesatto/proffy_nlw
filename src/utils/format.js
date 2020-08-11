const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber){
    return subjects[+subjectNumber - 1]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return 60 * Number(hour) + Number(minutes)

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}