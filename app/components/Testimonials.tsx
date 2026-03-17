import React from "react"
import { Star } from "lucide-react"

type Review = {
  name: string
  time: string
  review: string
  rating: number
}

type TestimonialsProps = {
  title: string
  ratingText: string
  rating: string
  reviews: Review[]
}

const Testimonials = ({ title, ratingText, rating, reviews }: TestimonialsProps) => {
  return (
    <section className="bg-[#1e1f24] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6">{title}</h2>

          <p className="text-gray-300 text-lg">
            {ratingText}{" "}
            <span className="text-yellow-400 font-semibold">{rating}</span>{" "}
            out of 5.
          </p>

          <div className="flex mt-6 -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i}`}
                alt={`User ${i}`}
                className="w-10 h-10 rounded-full border-2 border-[#1e1f24]"
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-xl p-6 bg-[#24252b]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 font-semibold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.time}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-5">{review.review}</p>

              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials