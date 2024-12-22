const Schema = {
    name: "Task",
    properties: {
        _id: "objectId",
        name: "string",
        completed: "bool", 
    },
    primaryKey: "_id", 
};

module.exports = Schema