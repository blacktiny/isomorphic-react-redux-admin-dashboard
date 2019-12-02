const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    user(uid: ID!): User
  }
  type User {
    uid: ID!
    name: String
    username: String
    avatar: String
    cover_photo: String
    posts: [Post]
    followers: [Person]
    following: [Person]
  }
  type Person {
    id: ID!
    name: String
    avatar: String
  }
  type Post {
    id: ID!
    type: String
    thumb_url: String
    numberOflike: Int
    numberOfcomment: Int
    gallery: [String]
    video: String
    comments: [Comment]
  }
  type Comment {
    id: ID!
    role: String
    avatar: String
    username: String
    comment: String
  }
`;

module.exports = typeDefs;
