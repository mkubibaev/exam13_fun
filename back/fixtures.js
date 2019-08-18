const nanoid = require('nanoid');

const mongoose = require('mongoose');
const config = require('./config');

const Place = require('./models/Place');
const User = require('./models/Users');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);
    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }
    const user = await User.create({
            username: "aman",
            password: "123",
            role: "user",
            token: nanoid()
        },
        {
            username: "Sem",
            password: "123",
            role: "user",
            token: nanoid()
        },
        {
            username: 'admin',
            password: '123',
            role: 'admin',
            token: nanoid()
        });


    const place = await Place.create(
        {
            user: user[0],
            name: 'Фаиза',
            description: 'На протяжении многих лет мы создаем для наших клиентов атмосферу уюта и отдыха. Каждый день нас посещает огромное количество людей всех возрастов, начиная от студентов и заканчивая деловыми людьми. Всех их объединяет одно -  любовь к восточной кухне.  "Фаиза" - сеть кафе, заслужившая известность далеко за пределами страны, благодаря превосходной кухне, первоклассному обслуживанию и вниманию к каждому гостю.',
            image:'faiza.jpeg',
            agree: true
        },
        {
            user: user[1],
            name: 'Кафе',
            description: 'На протяжении многих лет мы создаем для наших клиентов атмосферу уюта и отдыха. Каждый день нас посещает огромное количество людей всех возрастов, начиная от студентов и заканчивая деловыми людьми. Всех их объединяет одно -  любовь к восточной кухне.  "Фаиза" - сеть кафе, заслужившая известность далеко за пределами страны, благодаря превосходной кухне, первоклассному обслуживанию и вниманию к каждому гостю.',
            image:'faiza.jpeg',
            agree: true
        },
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went', error);
});
