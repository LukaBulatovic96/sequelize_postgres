"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user", [
      {
        id: 1,
        username: "user1",
        email: "user1@gmail.com",
        password: "password1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        username: "user2",
        email: "user2@gmail.com",
        password: "password2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        username: "user3",
        email: "user3@gmail.com",
        password: "password3",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],{});
    await queryInterface.bulkInsert(
      'channel',
      [
        {
          id: 1,
          name: 'channel1',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'channel2',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'video',
      [
        {
          id: 1,
          title: 'video1ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'video2ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'video3ByUser2',
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
