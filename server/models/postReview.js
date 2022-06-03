import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
   name: String,
   rating: Number,
   content: String
 });

 const Review = mongoose.model("Review", reviewSchema);

 // const review = new Review({
 //   name: "Leah",
 //   rating: 5,
 //   content: "This place is great!!"
 // })


export default Review;
