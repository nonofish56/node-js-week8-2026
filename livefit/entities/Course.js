//course
const { EntitySchema } = require('typeorm')
module.exports = new EntitySchema({
    name: 'Course',
    tableName: 'COURSE',

    columns:{
        id:{
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        name:{
            type: 'varchar',
            length: 100,
            nullable: false,
        },
            description: {
                type: 'text',
                nullable: false
            },
            start_at: {
                type: 'timestamp',
                nullable: false
            },
            end_at: {
                type: 'timestamp',
                nullable: false
            },
            max_participants:{
                type: 'integer',
                nullable: false
            },
            created_at:{
                type: 'timestamp',
                createDate: true
            },
            updated_at:{
                type: 'timestamp',
                updateDate: true
            },
            meeting_url:{
                type: 'varchar',
                length:2048,
                nullable: true
            },
    },
    relations:{
        user:{
            target:'User',
            type: 'many-to-one',
            joinColumn: {
                name: 'user_id'
            }
        },
        skill:{
            target: 'Skill',
            type: 'many-to-one',
            joinColumn:{
                name: 'skill_id'
            }
        }
    }
})