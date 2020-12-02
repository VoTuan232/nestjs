### GraphQL: https://graphql.org/learn/schema/

- String!: non-nullable, graphql luon cung cap gia tri khi truy van truong nay

<!-- 
mutation {
	createComment(idea: "1c3f7b4c-6706-4272-adc4-faea003bcf33", comment: "comment 3") {
    id,
    comment
  }
} -->

<!-- 
{
  whoaim {
    id
    username
  }
} -->

<!-- 
{
	comment(id: "d5ffcab3-b3b8-4f32-99a1-e962a09531ce") {
    id,
    created,
    author {
      id
      username
    }
    idea {
      id
      idea
    }
  }
} -->

