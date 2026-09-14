const { EntitySchema } = require('typeorm')
module.exports = new EntitySchema({
    name: 'Grade',
    tableName: 'GRADE',

    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        score: {
            type: 'integer',
            nullable: false
        },
        retake_score:{
            type: 'integer',
            nullable: true
        }
    },
    relations: {
        student: {
            target: 'Student',
            type: 'many-to-one',
            nullable: false,
            joinColumn:{
                name: 'student_id'
            },
        },
        subject: {
            target: 'Subject',
            type: 'many-to-one',
            nullable: false,
            joinColumn:{
                name: 'subject_id'
            }
        }
       
    }
})