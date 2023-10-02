import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold ">
        What our <span className="text-coral-red">Customers</span> are saying
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        hear genuine stories from our satisfied custmoers about thier
        exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
