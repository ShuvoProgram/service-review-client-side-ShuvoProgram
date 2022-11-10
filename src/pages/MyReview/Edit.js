import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const Edit = () => {
  const { id } = useParams();
    const navigate = useNavigate()

  const handleOnUpdate = (e) => {
    e.preventDefault();
    const field = e.target.review.value;
      const rating = e.target.rating.value;

    fetch(`http://localhost:5000/edit/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ field, rating }),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.modifiedCount > 0) {
            toast.success("Updated Review !")
            navigate('/myreview')
        }
      });
  };
  return (
    <div className="max-w-md">
      <form
        onSubmit={handleOnUpdate}
        className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Update Your Review {id}
        </h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="review" value="Update Review" />
          </div>
          <TextInput
            id="review"
            name="review"
            placeholder="Please Update Review"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Rating" value="Your Rating" />
          </div>
          <TextInput id="rating"
           type="number"
           name='rating'
          required={true} />
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Update"
            className="cursor-pointer p-2 bg-sky-600"></input>
        </div>
      </form>
    </div>
  );
};

export default Edit;
