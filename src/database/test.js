const db = require('./db.js')
const createProffy = require('./createProffy.js')

db.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Lucas Emanuel',
        avatar: 'https://avatars3.githubusercontent.com/u/58178979?s=460&u=9bc5a92f45719d7d2ba53c5927ea9803d60d543b&v=4',
        whatsapp: '35991704622',
        bio: 'Instrutor de Matemática IFMS'
    }

    classValue = {
        subject: 'Matemática',
        cost: '10'
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados
        {
            weekday: 2,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 5,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id =  proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h até as 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser maior

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)

    console.log(selectClassesSchedule)
})