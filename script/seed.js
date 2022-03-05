'use strict';

const {
  db,
  models: { User },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'Code_Mitrix',
      password: '123',
      firstName: 'Cody',
      lastName: 'Mitri',
      email: 'cody@gmail.com',
      phoneNumber: 222 - 224 - 4242,
      primaryRole: 'Software',
      subRole1: 'Frontend',
      subRole2: 'Fullstack',
      profilePicture_URL: 'https://i.ibb.co/vxd77Dr/disruptivo-Xaen-acs-LLo-unsplash-removebg-preview.png',
      linkedIn_URL: 'https://www.linkedin.com/',
      gitHub_URL: 'https://github.com/',
    }),
    User.create({
      username: 'SamBennett',
      password: '123',
      firstName: 'Sam',
      lastName: 'Bennett',
      email: 'SamHam@gmail.com',
      phoneNumber: 222 - 224 - 4242,
      primaryRole: 'Software',
      subRole1: 'Frontend',
      subRole2: 'Fullstack',
      profilePicture_URL: 'https://i.ibb.co/sRXvL3v/Sam-Bennett.png',
      linkedIn_URL: 'https://www.linkedin.com/',
      gitHub_URL: 'https://github.com/',
    }),
    User.create({
      username: 'Shedrack',
      password: '123',
      firstName: 'Shedrack',
      lastName: 'Salami',
      email: 'SSalami@gmail.com',
      phoneNumber: 222 - 224 - 4242,
      primaryRole: 'Software',
      subRole1: 'Frontend',
      subRole2: 'Fullstack',
      profilePicture_URL: 'https://i.ibb.co/TTqQht0/shedrack-salami-Ba1e-Gc-AFj5w-unsplash-removebg-preview.png',
      linkedIn_URL: 'https://www.linkedin.com/',
      gitHub_URL: 'https://github.com/',
    }),

    User.create({
      username: 'ehang',
      password: 'nice',
      firstName: 'Eric',
      lastName: 'Hang',
      email: 'eJackson@gmail.com',
      phoneNumber: 222 - 224 - 4242,
      primaryRole: 'Software',
      subRole1: 'Frontend',
      subRole2: 'Fullstack',
      profilePicture_URL: 'https://i.ibb.co/47cgQwd/profile-picture-removebg.png',
      linkedIn_URL: 'https://www.linkedin.com/in/ehang11/',
      gitHub_URL: 'https://github.com/ehang11',
    }),
  ]);

  console.log(`seeded ${users.length} users`);

  console.log(`seeded successfully`);
  return {
    users: {
      Code_Mitrix: users[0],
      SamBennett: users[1],
      Shedrack: users[2],
      Jackson1998: users[3],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
