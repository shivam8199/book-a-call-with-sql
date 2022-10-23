const Sequelize=require("sequelize");
const sequelize=new Sequelize('bookscall','root','Shivam@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;