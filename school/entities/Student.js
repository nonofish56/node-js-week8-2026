const { EntitySchema } = require('typeorm'
)
module.exports = new EntitySchema({
    name: 'Student',
    tableName: 'STUDENT',

    columns:{
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        name: {
            type: 'varchar',
            length: 50,
            nullable: false
        },
    },
    relations:{
        class:{
                target: 'Class',
                type: 'many-to-one',
                nullable: false,
                joinColumn: {
                    name: 'class_id'
                }
            }
        }
})