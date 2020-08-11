const Database = require('sqlite-async')
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db){
    async function deleteProffy (proffyID) {
        await db.run(`DELETE FROM proffys WHERE proffys.id == ${proffyID};`)
        await db.run(`DELETE FROM classes WHERE classes.proffy_id == ${proffyID};`)
        await db.run(`DELETE FROM class_schedule WHERE class_schedule.id == ${proffyID}`)
    }
    //caso queira deletar um proffy do database, chamar a funlçao deleteProffy:
    deleteProffy(13)

    //Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}