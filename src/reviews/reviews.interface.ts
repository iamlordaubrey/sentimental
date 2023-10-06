export interface Review {
  review: string;
  numberOfLikes: number;
  sentiment?: object
}

// interface Review extends BaseReview {
//   id: number;
// }

export interface Reviews {
  [key: number]: Review;
}
