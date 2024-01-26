const generateCrudMethods = Model => {
    return {
        getAll: () => Model.find(),
        getById: id => Model.findById(id),
        create: data => Model.create(data),
        update: (id, data) => Model.findByIdAndUpdate(id, data, { new: true }),
        delete: id => Model.findByIdAndDelete(id) 
    };
};

module.exports = {generateCrudMethods};