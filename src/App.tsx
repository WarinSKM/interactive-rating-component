import { useState, MouseEventHandler } from "react";
import { CustomRadio } from "./components/CustomRadio";
import { Button } from "./components/Button";

function App() {
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);
  const onSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    if (rating === 0) return;
    setSubmit(true);
  };

  return (
    <main className="bg-very-dark-blue min-h-screen flex justify-center items-center px-2 md:px-0">
      {!submit ? (
        <>
          <div className="box-border max-w-xs md:max-w-md bg-gradient-radial from-[#232A34] to-[#181E27] rounded-2xl p-10">
            <div className="rounded-full bg-dark-blue w-12 h-12 flex justify-center items-center mb-4 md:mb-8">
              <img src="/images/icon-star.svg" alt="icon-star" />
            </div>
            <h1 className="text-white text-2xl md:text-3xl mb-2 md:mb-4">How did we do?</h1>
            <p className="text-light-grey text-sm md:text-base mb-6">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-between items-center mb-6">
              <CustomRadio checked={rating} id="point-1" name="point-radio" onChange={setRating} value={1} />
              <CustomRadio checked={rating} id="point-2" name="point-radio" onChange={setRating} value={2} />
              <CustomRadio checked={rating} id="point-3" name="point-radio" onChange={setRating} value={3} />
              <CustomRadio checked={rating} id="point-4" name="point-radio" onChange={setRating} value={4} />
              <CustomRadio checked={rating} id="point-5" name="point-radio" onChange={setRating} value={5} />
            </div>
            <Button disabled={rating === 0} onClick={onSubmit}>
              SUBMIT
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="box-border max-w-xs md:max-w-md bg-gradient-radial from-[#232A34] to-[#181E27] rounded-2xl p-10 flex flex-col justify-center items-center">
            <img src="images/illustration-thank-you.svg" alt="thank-you-image"/>
            <div className="rounded-full bg-dark-blue flex justify-center items-center px-4 py-1 mt-4">
              <p className="text-primary text-sm">You selected {rating} of 5 </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h1 className="text-white text-2xl md:text-3xl mb-2">Thank you!</h1>
              <p className="text-light-grey text-center">
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
